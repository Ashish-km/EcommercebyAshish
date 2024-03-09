import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CoustomerService } from '../../services/coustomer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-seller-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seller-dashboard.component.html',
  styleUrl: './seller-dashboard.component.scss'
})
export class SellerDashboardComponent implements OnInit {

  order_dashboard_data: any;
  total_order: any;
  last_order_date: any;
  Product_dashboard_data: any;
  total_product: number = 0;
  publish_product: number = 0;
  inactive_product: number = 0;
  draft_product: number = 0

  constructor(private coustomerService: CoustomerService, private router: Router) {
  }
  ngOnInit(): void {
    this.sellerOrderDashboardData();
    this.sellerProductDashboardData();
  }


  sellerProductDashboard(){
    this.router.navigateByUrl("/seller/product")
  }
  sellerOrderDashboard(){
    alert("this option for only wip candidates")
  }

  sellerOrderDashboardData(){
    this.coustomerService.orderDashboardData().subscribe(data=>{
      this.order_dashboard_data=data;
      console.log("order dashboard data " ,this.order_dashboard_data);
      this.total_order=Number(this.order_dashboard_data.length);
      this.last_order_date = this.order_dashboard_data[this.total_order - 1].dateTime;
    },error=>{
      console.log("my error data" , error);
    })
  }

  sellerProductDashboardData(){
    this.coustomerService.productDashboardData().subscribe(data=>{
      this.Product_dashboard_data=data;
      for(status in this.Product_dashboard_data){
        console.log(this.Product_dashboard_data)
        if(this.Product_dashboard_data[status].status=='publish'){
          ++this.publish_product;
        }
        else if(this.Product_dashboard_data[status].status=='inacive'){
         ++this.inactive_product;
        }
        else if(this.Product_dashboard_data[status].status=='draft'){
          ++this.draft_product
        }
        ++this.total_product;
      }
    },error=>{
      console.log("My error",error)
    })
  }
}
