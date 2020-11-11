import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paymentMethod'
})
export class PaymentMethodPipe implements PipeTransform {

  transform(value: boolean, ): string {
    if(value == true){
      return 'Cash';
    }
    return 'Credit card'
  }

}
