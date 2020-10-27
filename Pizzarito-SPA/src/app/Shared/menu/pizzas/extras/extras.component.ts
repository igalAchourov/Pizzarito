import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/Core/menu.service';
import { OrderService } from 'src/app/Core/order.service';
import { MenuItem } from 'src/app/Models/menuItem';

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.css'],
})
export class ExtrasComponent implements OnInit {

  // @HostListener('window:beforeunload', ['$event'])
  // unloadNotification($event: any) {

  //     $event.returnValue = true;
    
  // }
  extras: MenuItem[];
  extrasOnPizza: MenuItem[] = [];
  constructor(
    private router: Router,
    private menuService: MenuService,
    public orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.menuService.getExtras().subscribe((data) => (this.extras = data));
  }

  backToSizes() {
    this.router.navigate(['/menu/pizzas']);
  }

  addExtra(extra: MenuItem) {
    this.orderService.addExtra(extra);
    this.extrasOnPizza.push(extra);
  }
  removeExtra(extra: MenuItem) {
    this.orderService.removeExtra(extra);
  }

  addPizza() {
    this.orderService.addPizza();
    this.router.navigate(['/menu']);
  }
}
