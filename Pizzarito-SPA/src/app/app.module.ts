import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { RegisterComponent } from './Shared/register/register.component';
import { JwtModule } from '@auth0/angular-jwt';
import { NgxCaptchaModule } from 'ngx-captcha';
import { OrderComponent } from './Shared/order/order.component';
import { PreventUnsavedChanges } from './Guards/prevent-unsaved-changes.guard';
import { PreventUnsavedChangesPaymentGuard } from './Guards/prevent-unsaved-changes-payment.guard';
import { PaymentComponent } from './Shared/payment/payment.component';
import { ErrorInterceptorProvider } from './error.interceptor';
import { MenuItemsResolver } from './Resolvers/menuItems.resolver';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import { OrderHistoryComponent } from './Shared/order-history/order-history.component';
import { PaymentMethodPipe } from './Shared/Pipes/payment-method.pipe';
import { OrderHistoryDetailComponent } from './Shared/order-history-detail/order-history-detail.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

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
    RegisterComponent,
    OrderComponent,
    PaymentComponent,
    OrderHistoryComponent,
    PaymentMethodPipe,
    OrderHistoryDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxCaptchaModule,
    RouterModule,
    MatRadioModule,
    JwtModule.forRoot( {
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:5000"],
        disallowedRoutes: ["localhost:5000/api/auth"],
      }
    }),
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [PreventUnsavedChanges,ErrorInterceptorProvider,MenuItemsResolver,PreventUnsavedChangesPaymentGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
