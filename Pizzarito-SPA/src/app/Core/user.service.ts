import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Address } from '../Models/address';
import { User } from '../Models/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.baseUrl;

  constructor(private http:HttpClient,private authService:AuthService) { }

  

updateUserAddress(id:number,address:Address){

return this.http.put<User>(this.baseUrl+"user/"+id,address);

}









}
