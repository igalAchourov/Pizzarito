import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-history-detail',
  templateUrl: './order-history-detail.component.html',
  styleUrls: ['./order-history-detail.component.css']
})
export class OrderHistoryDetailComponent implements OnInit {


order:any;

  constructor(private ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.ar.data.subscribe(order=>this.order=order.order);
    // this.order=x['order']
  }

}
