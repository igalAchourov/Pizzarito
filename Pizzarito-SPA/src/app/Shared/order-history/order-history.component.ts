import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Core/auth.service';
import { OrderService } from 'src/app/Core/order.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  orders:any;

  constructor(private orderService:OrderService,private authService:AuthService) { }

  ngOnInit(): void {
    this.orderService.getOrders(this.authService.decodedToken.nameid).subscribe(data=>{this.orders=data; console.log(this.orders)});;
  }

}
