import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { PaymentComponent } from '../Shared/payment/payment.component';

@Injectable({
  providedIn: 'root'
})
export class PreventUnsavedChangesPaymentGuard implements CanDeactivate<PaymentComponent> {
  canDeactivate(component: PaymentComponent ) {


    return confirm('Are you sure you want to continue? Any unsaved changes will be lost' ); 
  
  
  

  
  
}
  
}
