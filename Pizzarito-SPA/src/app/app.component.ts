import { Component ,OnInit} from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './Core/auth.service';
import { OrderService } from './Core/order.service';
import { User } from './Models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Pizzarito';

  jwtHelper = new JwtHelperService();

  constructor(private authService: AuthService,private orderService:OrderService) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    const user: User = JSON.parse(localStorage.getItem('user'));
    if (token) {
      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    }
    if (user) {
      this.authService.currentUser = user;
    }

    if(localStorage.getItem('order')){
      this.orderService.currentOrder =JSON.parse(localStorage.getItem('order'));
    }

    
  }
}
