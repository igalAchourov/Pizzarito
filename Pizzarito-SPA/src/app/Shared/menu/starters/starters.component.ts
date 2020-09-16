import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private menuService: MenuService ,private router:Router) {}

  ngOnInit(): void {
     this.menuService.getStarters().subscribe(data=>this.starters =data);
  }

  backToMenu(){
    this.router.navigate(['/menu'])
  }

}
