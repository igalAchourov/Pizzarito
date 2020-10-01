import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuItem } from '../Models/menuItem';
@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private http: HttpClient) {}

  getStarters() {
    return this.http.get<MenuItem[]>('http://localhost:5000/api/menu/starters');
  }
  getDesserts() {
    return this.http.get<MenuItem[]>('http://localhost:5000/api/menu/desserts');
  }
  getDrinks() {
    return this.http.get<MenuItem[]>('http://localhost:5000/api/menu/drinks');
  }

  getSizes() {
    return this.http.get<MenuItem[]>('http://localhost:5000/api/menu/sizes');
  }
  getExtras() {
    return this.http.get<MenuItem[]>('http://localhost:5000/api/menu/extras');
  }
}
