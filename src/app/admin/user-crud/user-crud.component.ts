import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../../core/Model/object-model';

@Component({
  selector: 'app-user-crud',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-crud.component.html',
  styleUrl: './user-crud.component.scss'
})
export class UserCrudComponent {

   all_user_data:any;
   single_user_data:any;
   addEditUserForm!:FormGroup;
   user_dto!:User;
  user_reg_data:any;
  edit_user_id:any;
  upload_file_name!:string;
  adddEditUser:boolean=false;

}
