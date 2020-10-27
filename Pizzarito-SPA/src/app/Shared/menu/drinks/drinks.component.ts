import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService } from 'src/app/Core/alertify.service';
import { MenuService } from 'src/app/Core/menu.service';
import { OrderService } from 'src/app/Core/order.service';
import { MenuItem } from 'src/app/Models/menuItem';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {

  drinks:MenuItem[];

  constructor(private ar:ActivatedRoute,private menuService:MenuService,private router:Router,private orderService:OrderService,private alertify:AlertifyService) { }

  ngOnInit(): void {
    this.ar.data.subscribe(data=>{
      this.drinks= data['menuItem']});
  }

  backToMenu(){
    this.router.navigate(['/menu'])
  }


  add(drink: MenuItem) {
    this.orderService.addDrink(drink);

  }


}
