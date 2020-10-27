import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService } from 'src/app/Core/alertify.service';
import { MenuService } from 'src/app/Core/menu.service';
import { OrderService } from 'src/app/Core/order.service';
import { MenuItem } from 'src/app/Models/menuItem';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.css'],
})
export class DessertsComponent implements OnInit {
  desserts: MenuItem[];
errorMessage:string;

  constructor(
    private menuService: MenuService,
    private router: Router,
    private orderService: OrderService,
    private alertify: AlertifyService,
    private ar: ActivatedRoute
  ) {}

  ngOnInit(): void {
   this.ar.data.subscribe(data=>{
     this.desserts= data['menuItem']});
  }

  backToMenu() {
    this.router.navigate(['/menu']);
  }

  add(dessert: MenuItem) {
    this.orderService.addDessert(dessert);
  }

  
}
