import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AlertifyService } from '../Core/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MenuItem } from '../models/menuItem';
import { MenuService } from '../Core/menu.service';

@Injectable()
export class MenuItemsResolver implements Resolve<MenuItem[]> {
  constructor(
    private router: Router,
    private alertify: AlertifyService,
    private menuService: MenuService
  ) {}
  resolve(route: ActivatedRouteSnapshot): Observable<MenuItem[]> {
    let itemType = route.data['menuItem'];

    if (itemType == 'desserts') {
      return this.menuService.getDesserts().pipe(
        catchError((error) => {
          this.alertify.error('Problem retrieving data, please try again later');
          this.router.navigate(['/home']);
          return of(null);
        })
      );
    } else if (itemType == 'drinks') {
      return this.menuService.getDrinks().pipe(
        catchError((error) => {
          this.alertify.error('Problem retrieving data, please try again later');
          this.router.navigate(['/home']);
          return of(null);
        })
      );
    } else if (itemType == 'starters') {
      return this.menuService.getStarters().pipe(
        catchError((error) => {
          this.alertify.error('Problem retrieving data, please try again later');
          this.router.navigate(['/home']);
          return of(null);
        })
      );
    }
    if (itemType == 'pizzas') {
      return this.menuService.getSizes().pipe(
        catchError((error) => {
          this.alertify.error('Problem retrieving data, please try again later');
          this.router.navigate(['/home']);
          return of(null);
        })
      );
    }
  }
}

// resolve(route: ActivatedRouteSnapshot): Observable<MenuItem[]> {
//   let itemType = route.data['menuItem'];

//   switch (itemType) {
//     case itemType == 'desserts': {
//       return this.menuService.getDesserts().pipe(
//           catchError((error) => {
//             this.alertify.error('Problem retrieving data');
//             this.router.navigate(['/home']);
//             return of(null);
//           })
//         );;
//     }
//     case itemType == 'drinks': {
//       return this.menuService.getDrinks().pipe(
//           catchError((error) => {
//             this.alertify.error('Problem retrieving data');
//             this.router.navigate(['/home']);
//             return of(null);
//           })
//         );;
//     }
//     case itemType == 'starters': {
//       return this.menuService.getStarters().pipe(
//           catchError((error) => {
//             this.alertify.error('Problem retrieving data');
//             this.router.navigate(['/home']);
//             return of(null);
//           })
//         );
//     }
//     case itemType == 'pizzas': {
//       return this.menuService.getSizes().pipe(
//         catchError((error) => {
//           this.alertify.error('Problem retrieving data');
//           this.router.navigate(['/home']);
//           return of(null);
//         })
//       );
//     }
//   }
// }
