import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService } from 'src/app/Core/alertify.service';
import { OrderService } from 'src/app/Core/order.service';
import { MenuItem } from 'src/app/Models/menuItem';
import { MenuService } from '../../../Core/menu.service';
import { MenuComponent } from '../menu.component';


@Component({
  selector: 'app-starters',
  templateUrl: './starters.component.html',
  styleUrls: ['./starters.component.css'],
})
export class StartersComponent implements OnInit {

starters:MenuItem[];

  constructor(private ar:ActivatedRoute, private menuService: MenuService ,private router:Router,private orderService:OrderService,private alertify:AlertifyService) {}

  ngOnInit(): void {
    this.ar.data.subscribe(data=>{
      this.starters= data['menuItem']});
  }

  backToMenu(){
    this.router.navigate(['/menu'])
  }



  add(starter: MenuItem) {
    this.orderService.addStarter(starter);
  }

}
