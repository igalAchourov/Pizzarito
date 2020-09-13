import { Routes } from '@angular/router'
import {HomeComponent } from './Shared/home/home.component';
import {PageNotFoundComponent} from './Shared/page-not-found/page-not-found.component';
import {MenuComponent } from './Shared/menu/menu.component';



export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {path:'menu',component:MenuComponent},

    { path: '**', component: PageNotFoundComponent },


]

