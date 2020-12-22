import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CompleteOrderGuard implements CanActivate {
  constructor( private router: Router) { }

  canActivate(): boolean {
  if (sessionStorage.getItem('completedOrder')) {
      return true;
    }
    
    this.router.navigate(['/home']);
    return false;
  }
  
}
