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
import { RegisterComponent } from './Shared/register/register.component';
import { OrderComponent } from './Shared/order/order.component';
import { ExtrasGuard } from './Guards/extras.guard';
import { PaymentComponent } from './Shared/payment/payment.component';
import { MenuItemsResolver } from 'src/app/Resolvers/menuItems.resolver';
import { PreventUnsavedChangesPaymentGuard } from './Guards/prevent-unsaved-changes-payment.guard';
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'order', component: OrderComponent },
  {
    path: 'menu',
    runGuardsAndResolvers: 'always',
    component: MenuComponent,
    children: [
      { path: '', component: CategoriesComponent },
      {
        path: 'starters',
        component: StartersComponent,
        resolve: { menuItem: MenuItemsResolver },
        data: { menuItem: 'starters' },
      },
      {
        path: 'desserts',
        component: DessertsComponent,
        resolve: { menuItem: MenuItemsResolver },
        data: { menuItem: 'desserts' },
      },
      {
        path: 'drinks',
        component: DrinksComponent,
        resolve: { menuItem: MenuItemsResolver },
        data: { menuItem: 'drinks' },
      },
      {
        path: 'pizzas',
        component: PizzasComponent,
        children: [
          {
            path: '',
            component: SizesComponent,
            resolve: { menuItem: MenuItemsResolver },
            data: { menuItem: 'pizzas' },
          },
          {
            path: 'extras',
            component: ExtrasComponent,
            canActivate: [ExtrasGuard],
          },
        ],
      },
    ],
  },
  { path: 'about', component: AboutComponent },
  {
    path: 'payment',
    component: PaymentComponent,
    canDeactivate: [PreventUnsavedChangesPaymentGuard],
  },

  { path: '**', component: PageNotFoundComponent },
];
