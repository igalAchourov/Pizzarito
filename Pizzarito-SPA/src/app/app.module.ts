import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './Shared/menu/menu.component';
import { HomeComponent } from './Shared/home/home.component';
import { PageNotFoundComponent } from './Shared/page-not-found/page-not-found.component';
import { routes } from './router';
import { NavComponent } from './Shared/nav/nav.component';
import { AboutComponent } from './Shared/about/about.component';
import { StartersComponent } from './Shared/menu/starters/starters.component';
import { CategoriesComponent } from './Shared/menu/categories/categories.component';
import { DessertsComponent } from './Shared/menu/desserts/desserts.component';
import { DrinksComponent } from './shared/menu/drinks/drinks.component';
import { PizzasComponent } from './shared/menu/pizzas/pizzas.component';
import { SizesComponent } from './shared/menu/pizzas/sizes/sizes.component';
import { ExtrasComponent } from './shared/menu/pizzas/extras/extras.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavComponent,
    AboutComponent,
    StartersComponent,
    CategoriesComponent,
    DessertsComponent,
    DrinksComponent,
    PizzasComponent,
    SizesComponent,
    ExtrasComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
