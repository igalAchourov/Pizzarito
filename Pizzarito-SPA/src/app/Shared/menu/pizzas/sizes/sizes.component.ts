import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from 'src/app/Core/menu.service';
import { OrderService } from 'src/app/Core/order.service';
import { MenuItem } from 'src/app/Models/menuItem';

@Component({
  selector: 'app-sizes',
  templateUrl: './sizes.component.html',
  styleUrls: ['./sizes.component.css'],
})
export class SizesComponent implements OnInit {
  sizes: MenuItem[];

  constructor(
    private router: Router,
    private menuService: MenuService,
    private orderService: OrderService,
    private ar:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ar.data.subscribe(data=>{
      this.sizes= data['menuItem']});
  }

  backToMenu() {
    this.router.navigate(['/menu']);
  }

  addSize(size: MenuItem) {
    this.orderService.initPizza(size);
    this.router.navigate(['menu/pizzas/extras']);
  }
}
