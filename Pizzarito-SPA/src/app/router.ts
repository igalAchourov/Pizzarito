import { Routes } from '@angular/router';
import { HomeComponent } from './Shared/home/home.component';
import { PageNotFoundComponent } from './Shared/page-not-found/page-not-found.component';
import { MenuComponent } from './Shared/menu/menu.component';
import { AboutComponent } from './Shared/about/about.component';
import { StartersComponent } from './Shared/menu/starters/starters.component';
import { CategoriesComponent } from './Shared/menu/categories/categories.component';
import { DessertsComponent } from './Shared/menu/desserts/desserts.component';
import { DrinksComponent } from './shared/menu/drinks/drinks.component';
import { PizzasComponent } from './shared/menu/pizzas/pizzas.component';
import { SizesComponent } from './shared/menu/pizzas/sizes/sizes.component';
import { ExtrasComponent } from './shared/menu/pizzas/extras/extras.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'menu',
    component: MenuComponent,
    children: [
      { path: '', component: CategoriesComponent },
      { path: 'starters', component: StartersComponent },
      { path: 'desserts', component: DessertsComponent },
      { path: 'drinks', component: DrinksComponent },
      {
        path: 'pizzas',
        component: PizzasComponent,
        children: [
          { path: '', component: SizesComponent },
          { path: 'extras', component: ExtrasComponent },
        ],
      },
    ],
  },
  { path: 'about', component: AboutComponent },

  { path: '**', component: PageNotFoundComponent },
];
