import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/Core/menu.service';
import { MenuItem } from 'src/app/Models/menuItem';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {

  drinks:MenuItem[];

  constructor(private menuService:MenuService,private router:Router) { }

  ngOnInit(): void {
    this.menuService.getDrinks().subscribe(data=>this.drinks =data);
  }

  backToMenu(){
    this.router.navigate(['/menu'])
  }
}
