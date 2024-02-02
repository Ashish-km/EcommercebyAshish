import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


//admin befor login check
@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardLogin implements CanActivate {
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let role = sessionStorage.getItem("role");
    if (role == "admin") {
      this.router.navigate(['/admin-dashboard']);
      return false;
    }
    else {  
      return true;
    }
  }
}

//admin after  login check 
@Injectable({
  providedIn: 'root'
})

export class AdminAuthGuardServcie {
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let role = sessionStorage.getItem("role");
    if (role == "admin") {
      return true;
    }
    else {
      this.router.navigate(['/admin-login']);
      return false;
    }
  }
}

//custmer (buyer & seller) before login check
@Injectable({
  providedIn: 'root'
})

export class SellerBuyerAuthGuardLogin implements CanActivate{
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let role = sessionStorage.getItem("role");
    if (role == "seller") {
      this.router.navigate(['/seller-dashbard']);
      return true;  
    }
    else if(role == "buyer"){
      this.router.navigate(['/buyer-dashbard']);
      return false;
    }
    else{
      return true;
    }
  }
}


//buyer after  login check 
@Injectable({
  providedIn: 'root'
})

export class BuyerAuthGuardServcie {
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let role = sessionStorage.getItem("role");
    if (role == "buyer") {
      return true;
    }
    else {
      this.router.navigate(['/sign-in']);
      return false;
    }
  }
}


//seller after  login check 
@Injectable({
  providedIn: 'root'
})

export class SellerAuthGuardService {
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let role = sessionStorage.getItem("role");
    if (role == "seller") {
      return true;
    }
    else {
      this.router.navigate(['/sign-in']);
      return false;
    }
  }
}