import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/Core/alertify.service';
import { AuthService } from 'src/app/Core/auth.service';
import { MenuItem } from 'src/app/Models/menuItem';
import { Order } from 'src/app/Models/order';
import { Pizza } from 'src/app/Models/pizza';
import { OrderService } from '../../Core/order.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  order: Order;

  constructor(private orderService: OrderService ,private router:Router ,private authService:AuthService,private alertify:AlertifyService) {
    this.order = this.orderService.currentOrder;
  }

  ngOnInit(): void {}

  removeStarter(starter: MenuItem) {
    this.orderService.removeStarter(starter);
    console.log(this.order);
  }
  removeDessert(dessert: MenuItem) {
    this.orderService.removeDessert(dessert);
  }
  removeDrink(drink: MenuItem) {
    this.orderService.removeDrink(drink);
  }
  removePizza(pizza:Pizza){
    this.orderService.removePizza(pizza);
  }
  backToMenu(){
    this.router.navigate(['/menu'])
  }

  proceedToPayment(){

    if(!this.authService.currentUser){

      this.alertify.error('You must login first!');
      this.router.navigate(['home']);
    }
    else{
      this.router.navigate(['payment']);
    }

    

  }

}
