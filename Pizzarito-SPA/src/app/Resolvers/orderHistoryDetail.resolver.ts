import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AlertifyService } from '../Core/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MenuItem } from '../models/menuItem';
import { OrderService } from '../Core/order.service';

@Injectable()
export class OrderHistoryDetailResolver implements Resolve<any> {
  constructor(
    private router: Router,
    private alertify: AlertifyService,
    private orderService:OrderService
  ) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
  return this.orderService.getOrder(route.params['orderId']).pipe(catchError(error => {

        this.alertify.error('Problem retrieving data');
        this.router.navigate(['/ordersHistory']);
        return of(null);

    }))
    
  }
}

