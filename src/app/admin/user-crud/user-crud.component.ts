import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { User } from '../../core/Model/object-model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service';
declare var JQuery: any;

@Component({
  selector: 'app-user-crud',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-crud.component.html',
  styleUrl: './user-crud.component.scss'
})
export class UserCrudComponent {

  all_user_data: any;
  single_user_data: any;
  addEditUserForm!: FormGroup;
  user_dto!: User;
  user_reg_data: any;
  edit_user_id: any;
  upload_file_name!: string;
  addEditUser: boolean = false;
  add_user: boolean = false;
  edit_user: boolean = false;
  popup_header!: string;
  signInForValue: any = {}

  constructor(private formBuilder: FormBuilder, private router: Router, private adminservice: AdminService) { }

  ngOnInit(): void {
    this.getAllUser();
    this.addEditUserForm = this.formBuilder.group({
      name: ['', Validators.required],
      mobNumber: ['', Validators.required],
      age: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      addline1: ['', Validators.required],
      addline2: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      language: ['', Validators.required],
      gender: ['', Validators.required],
      aboutYou: ['', Validators.required],
      uploadPhoto: ['', Validators.required],
      agreetc: ['', Validators.required],
      role: ['', Validators.required],
    })
  }
  getAllUser() {
    this.adminservice.allUser().subscribe(data => {
      this.all_user_data;
    }, error => {
      console.log("my error", error)
    })
  }
  get rf() {
    return this.addEditUserForm.controls;
  }
  addUserPopup() {
    this.edit_user = false;
    this.add_user = true;
    this.popup_header = "Add new USer";
    this.addEditUserForm.reset();
  }
  addUser() {
    this.addEditUser = true;
    if (this.addEditUserForm.invalid) {
      alert("Error!! :-\n\n " + JSON.stringify(this.addEditUserForm.value));
      return;
    }
    this.user_reg_data = this.addEditUserForm.value;
    this.user_dto = {

      aboutYou: this.user_reg_data.aboutYou,
      age: this.user_reg_data.age,
      agreetc: this.user_reg_data.agreetc,
      dob: this.user_reg_data.dob,
      email: this.user_reg_data.email,
      gender: this.user_reg_data.gender,
      address: {
        id: 0,
        addLine1: this.user_reg_data.addLine1,
        addLine2: this.user_reg_data.addLine2,
        city: this.user_reg_data.city,
        state: this.user_reg_data.state,
        zipCode: this.user_reg_data.zipCode,
      },
      language: this.user_reg_data.language,
      mobNumber: this.user_reg_data.mobNumber,
      name: this.user_reg_data.name,
      password: this.user_reg_data.password,
      uploadPhoto: this.user_reg_data.uploadPhoto,
      role: this.user_reg_data.role,
    }
    this.adminservice.addUser(this.user_dto).subscribe(data => {
      this.getAllUser();
      JQuery('#addEditModal').modal('toggle');
    }, error => {
      console.log("my worng", error);
    })
  }

  editUserPopup(user_id: any) {
    this.edit_user_id = user_id;
    this.edit_user = true;
    this.add_user = false;
    this.popup_header = "edit User"
    this.adminservice.singleUser(user_id).subscribe(data => {
      this.single_user_data = data;
      this.upload_file_name = this.single_user_data.uploadPhoto;
      this.addEditUserForm.setValue({
        name: this.single_user_data.name,
        mobNumber: this.single_user_data.mobNumber,
        age: this.single_user_data.age,
        dob: this.single_user_data.dob,
        email: this.single_user_data.email,
        password: this.single_user_data.password,
        language: this.single_user_data.language,
        gender: this.single_user_data.gender,
        addline1: this.single_user_data.addline1,
        addline2: this.single_user_data.addline2,
        city: this.single_user_data.city,
        state: this.single_user_data.state,
        zipcode: this.single_user_data.zipCode,
        aboutyou: this.single_user_data.aboutYou,
        uploadPhoto: '',
        agreetc: this.single_user_data.agreetc,
        role: this.single_user_data.role

      })
    },error=>{
      console.log("MY ERROR",error);
    }
    )
  }

  updateUSer(){
    if (this.addEditUserForm.invalid) {
      alert("Error!! :-\n\n " + JSON.stringify(this.addEditUserForm.value));
      return;
    }
    this.user_reg_data = this.addEditUserForm.value;
    this.user_dto = {
      aboutYou: this.user_reg_data.aboutYou,
      age: this.user_reg_data.age,
      agreetc: this.user_reg_data.agreetc,
      dob: this.user_reg_data.dob,
      email: this.user_reg_data.email,
      gender: this.user_reg_data.gender,
      address: {
        id: 0,
        addLine1: this.user_reg_data.addLine1,
        addLine2: this.user_reg_data.addLine2,
        city: this.user_reg_data.city,
        state: this.user_reg_data.state,
        zipCode: this.user_reg_data.zipCode,
      },
      language: this.user_reg_data.language,
      mobNumber: this.user_reg_data.mobNumber,
      name: this.user_reg_data.name,
      password: this.user_reg_data.password,
      uploadPhoto:(this.user_reg_data.uploadPhoto == "" ? this.upload_file_name:this.user_reg_data.uploadPhoto),
      role: this.user_reg_data.role,
    }
    this.adminservice.editUser(this.edit_user_id,this.user_dto).subscribe(data => {
      this.getAllUser();
      JQuery('#addEditModal').modal('toggle');
    }, error => {
      console.log("my worng", error);
    })
  }
  deleteUser(user_id:any){
    this.adminservice.deleteUser(user_id).subscribe(data=>{
      this.getAllUser();
    },error=>{
      console.log("My error",error)
    })
  }
}