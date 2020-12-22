import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/Core/order.service';

@Component({
  selector: 'app-order-complete',
  templateUrl: './order-complete.component.html',
  styleUrls: ['./order-complete.component.css'],
})
export class OrderCompleteComponent implements OnInit {
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.order = JSON.parse(sessionStorage.getItem('completedOrder'));
  }

  order: any;
}
