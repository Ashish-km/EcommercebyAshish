import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CoustomerService } from '../../services/coustomer.service';

@Component({
  selector: 'app-buyer-dashboard',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './buyer-dashboard.component.html',
  styleUrl: './buyer-dashboard.component.scss'
})
export class BuyerDashboardComponent implements OnInit{
  all_products:any;
  show_Checkout:boolean=false;


constructor(private router:Router, private coustomerService:CoustomerService,){
}
ngOnInit(): void {
 this.getAllProduct()
}
getAllProduct(){
  this.coustomerService.allProduct().subscribe(data=>{
this.all_products = data;
console.log(this.all_products);
  },error=>{
    console.log("my error",error);
  })
}
buyProduct(id:number){
  this.show_Checkout=true;
  this.coustomerService.quickBuyProduct(id);
  this.router.navigateByUrl('/checkout');

}
addToCart(){
  alert("thisis Showcase")
}
}
