import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MenuItem } from '../Models/menuItem';
import { Order } from '../Models/order';
import { Pizza } from '../Models/pizza';
import { PizzasComponent } from '../shared/menu/pizzas/pizzas.component';
import { AlertifyService } from './alertify.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {

  currentOrder: Order;
  baseUrl = environment.baseUrl;

  constructor(
    private alertify: AlertifyService,
    private http: HttpClient,
    private authService: AuthService
  ) {
    if (!this.currentOrder) {
      this.currentOrder = new Order();
      this.currentOrder.totalBill = 0;
      this.currentOrder.items = 0;
    }
  }


  updateLsAndTotalBill(item: MenuItem, calc: string) {
    if (calc == 'add') {
      this.currentOrder.totalBill += item.price;
      this.currentOrder.items++;
      this.alertify.success(item.name + ' added to cart');
    } else if (calc == 'remove') {
      this.currentOrder.totalBill -= item.price;
      this.currentOrder.items--;
      this.alertify.warning(item.name + ' removed');
    }
    localStorage.setItem('order', JSON.stringify(this.currentOrder));
  }

  checkIfExtraExists(pizza: Pizza, extra: MenuItem) {
    for (let i = 0; i < pizza.extras.length; i++) {
      if (extra.id == pizza.extras[i].id) {
        return true;
      }
    }
    return false;
  }

  resetOrder(){

    this.currentOrder=undefined;



    console.log(this.currentOrder);
    
  }

  
  sendOrder(isCash:boolean) {

    let orderToServer = {
      UserId: this.authService.currentUser.id,
      TotalBill: this.currentOrder.totalBill,
      IsCash: isCash,
      OrderedDesserts: this.mapToOrderedDesserts(this.currentOrder.desserts),
      OrderedDrinks: this.mapToOrderedDrinks(this.currentOrder.drinks),
      OrderedStarters: this.mapToOrderedStarters(this.currentOrder.starters),
      Pizzas: this.mapPizzas(this.currentOrder.pizzas),
    };

     return this.http.post(this.baseUrl + 'order', orderToServer);
  }

  // ******************ADD FUNCTIONS*************************

  addStarter(starter: MenuItem) {
    if (!this.currentOrder.starters) {
      this.currentOrder.starters = [];
    }
    this.currentOrder.starters.push(starter);
    this.updateLsAndTotalBill(starter, 'add');
  }

  addDrink(drink: MenuItem) {
    if (!this.currentOrder.drinks) {
      this.currentOrder.drinks = [];
    }
    this.currentOrder.drinks.push(drink);
    this.updateLsAndTotalBill(drink, 'add');
  }

  addDessert(dessert: MenuItem) {
    if (!this.currentOrder.desserts) {
      this.currentOrder.desserts = [];
    }
    this.currentOrder.desserts.push(dessert);
    this.updateLsAndTotalBill(dessert, 'add');
  }

  initPizza(size: MenuItem) {
    this.currentOrder.currentPizza = new Pizza(size);
    this.currentOrder.currentPizza.totalBill += size.price;

    localStorage.setItem('order', JSON.stringify(this.currentOrder));
  }

  addExtra(extra: MenuItem) {
    if (!this.currentOrder.currentPizza.extras) {
      this.currentOrder.currentPizza.extras = [];
    } else if (this.checkIfExtraExists(this.currentOrder.currentPizza, extra)) {
      this.alertify.error(extra.name + ' already on it!');
      return;
    }
    this.currentOrder.currentPizza.extras.push(extra);
    this.currentOrder.currentPizza.totalBill += extra.price;

    localStorage.setItem('order', JSON.stringify(this.currentOrder));
  }

  addPizza() {
    if (!this.currentOrder.pizzas) {
      this.currentOrder.pizzas = [];
    }
    this.currentOrder.pizzas.push(this.currentOrder.currentPizza);
    this.currentOrder.items++;
    this.currentOrder.totalBill += this.currentOrder.currentPizza.totalBill;

    this.alertify.success('Pizza added to cart');
    this.currentOrder.currentPizza = undefined;
    localStorage.setItem('order', JSON.stringify(this.currentOrder));
  }

  // ******************REMOVE FUNCTIONS*************************

  removeStarter(starter: MenuItem) {
    this.alertify.confirm(
      'You sure you want to remove ' + starter.name + '?',
      () => {
        this.currentOrder.starters.splice(
          this.currentOrder.starters.indexOf(starter),
          1
        );

        this.updateLsAndTotalBill(starter, 'remove');
      }
    );
  }

  removeDessert(dessert: MenuItem) {
    this.alertify.confirm(
      'You sure you want to remove ' + dessert.name + '?',
      () => {
        this.currentOrder.desserts.splice(
          this.currentOrder.desserts.indexOf(dessert),
          1
        );
        this.updateLsAndTotalBill(dessert, 'remove');
      }
    );
  }

  removeDrink(drink: MenuItem) {
    this.alertify.confirm(
      'You sure you want to remove ' + drink.name + '?',
      () => {
        this.currentOrder.drinks.splice(
          this.currentOrder.drinks.indexOf(drink),
          1
        );
        this.updateLsAndTotalBill(drink, 'remove');
      }
    );
  }

  removeExtra(extra: MenuItem) {
    if (this.currentOrder.currentPizza.extras.indexOf(extra) != -1) {
      this.currentOrder.currentPizza.extras.splice(
        this.currentOrder.currentPizza.extras.indexOf(extra),
        1
      );
      this.currentOrder.currentPizza.totalBill -= extra.price;
      localStorage.setItem('order', JSON.stringify(this.currentOrder));
    }
  }

  removePizza(pizza: Pizza) {
    this.alertify.confirm(
      'You sure you want to remove Pizza(' + pizza.size.name + ')?',
      () => {
        this.currentOrder.pizzas.splice(
          this.currentOrder.pizzas.indexOf(pizza),
          1
        );
        this.currentOrder.totalBill -= pizza.totalBill;
        this.currentOrder.items--;
        localStorage.setItem('order', JSON.stringify(this.currentOrder));
      }
    );
  }


  //******************* MAPPING FUNCTIONS *******************
  mapToOrderedDesserts(desserts: MenuItem[]) {
    let itemsMap = new Map<number, any>();
    let itemsToServer: any[] = [];

    if( desserts ){
      desserts.forEach((el) => {
        if (itemsMap.has(el.id)) {
          itemsMap.set(el.id, {
            DessertId: el.id,
            Unit: itemsMap.get(el.id).Unit + 1,
            TotalBill: itemsMap.get(el.id).TotalBill + el.price,
          });
        } else {
          itemsMap.set(el.id, {
            DessertId: el.id,
            Unit: 1,
            TotalBill: el.price,
          });
        }
      });
  
      itemsMap.forEach((val, key) => {
        itemsToServer.push(val);
      });
   
    }
    return itemsToServer; 

 
  }

  mapToOrderedDrinks(drinks: MenuItem[]) {
    //debugger;
    let itemsMap = new Map<number, any>();
    let itemsToServer: any[] = [];


    if(drinks){
      drinks.forEach((el) => {
        if (itemsMap.has(el.id)) {
          itemsMap.set(el.id, {
            DrinkId: el.id,
            Unit: itemsMap.get(el.id).Unit + 1,
            TotalBill: itemsMap.get(el.id).TotalBill + el.price,
          });
        } else {
          itemsMap.set(el.id, {
            DrinkId: el.id,
            Unit: 1,
            TotalBill: el.price,
          });
        }
      });
  
      itemsMap.forEach((val, key) => {
        itemsToServer.push(val);
      });
    }
  

    return itemsToServer;
  }

  mapToOrderedStarters(starters: MenuItem[]) {
    //debugger;
    let itemsMap = new Map<number, any>();
    let itemsToServer: any[] = [];

    if(starters){
        starters.forEach((el) => {
      if (itemsMap.has(el.id)) {
        itemsMap.set(el.id, {
          StarterId: el.id,
          Unit: itemsMap.get(el.id).Unit + 1,
          TotalBill: itemsMap.get(el.id).TotalBill + el.price,
        });
      } else {
        itemsMap.set(el.id, {
          StarterId: el.id,
          Unit: 1,
          TotalBill: el.price,
        });
      }
    });

    itemsMap.forEach((val, key) => {
      itemsToServer.push(val);
    });
    }
  
    return itemsToServer;
  }

  mapPizzas(pizzas: Pizza[]) {
    let pizzasToServer: any[] = [];
    let pizza: any = new Object();
    pizza.Extras = [];

    
    pizzas.forEach((el) => {
      pizza.SizeId = el.size.id;
      pizza.TotalBill=el.totalBill;

      if (el.extras) {
        el.extras.forEach((ex) => {
          pizza.Extras.push({ ExtraId: ex.id });
        });
      }
      
      
      pizzasToServer.push(pizza);
      pizza=new Object();
      pizza.Extras = [];
    });

    return pizzasToServer;
  }



  getOrders(id:number){
    return this.http.get(this.baseUrl+'order/'+id);
  }

  getOrder(orderId:number){
    return this.http.get(this.baseUrl+'order/'+this.authService.decodedToken.nameid+'/orderHistory/'+orderId);
  }



}
