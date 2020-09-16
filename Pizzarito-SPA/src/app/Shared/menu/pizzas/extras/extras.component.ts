import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/Core/menu.service';
import { MenuItem } from 'src/app/Models/menuItem';

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.css']
})
export class ExtrasComponent implements OnInit {

extras:MenuItem[];

  constructor(private router:Router,private menuService:MenuService ) { }

  ngOnInit(): void {
    this.menuService.getExtras().subscribe(data=>this.extras=data);
  }

  backToSizes(){
    this.router.navigate(['/menu/pizzas']);
  }

  addPizza(){
    this.router.navigate(['/menu']);
  }


}
