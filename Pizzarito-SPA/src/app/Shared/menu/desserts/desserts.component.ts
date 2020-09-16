import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/Core/menu.service';
import { MenuItem } from 'src/app/Models/menuItem';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.css']
})
export class DessertsComponent implements OnInit {

  desserts:MenuItem[];

  constructor(private menuService:MenuService,private router:Router) { }

  ngOnInit(): void {
    this.menuService.getDesserts().subscribe(data=>this.desserts =data);
  }
  backToMenu(){
    this.router.navigate(['/menu'])
  }

}
