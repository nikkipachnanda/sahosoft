import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate {
  userDisplayName:any;
  constructor(private routes:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      this.userDisplayName = localStorage.getItem('user');
      if( this.userDisplayName!=null){
      console.log("user  logged in");
      return true;
    }
    else 
    {
      console.log("user  not logged in");
      return false;
    }
  }
  
}
