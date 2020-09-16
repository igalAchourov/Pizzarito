import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/Core/menu.service';
import { MenuItem } from 'src/app/Models/menuItem';

@Component({
  selector: 'app-sizes',
  templateUrl: './sizes.component.html',
  styleUrls: ['./sizes.component.css']
})
export class SizesComponent implements OnInit {

sizes:MenuItem[];

  constructor(private router:Router,private menuService:MenuService ) { }

  ngOnInit(): void {
    this.menuService.getSizes().subscribe(data=>this.sizes = data);
  }


  backToMenu(){
    this.router.navigate(['/menu']);
  }

  addSize(){
this.router.navigate(['menu/pizzas/extras']);
  }

}
