import { Injectable } from '@angular/core';
import { CanDeactivate, Router } from '@angular/router';
import { ExtrasComponent } from '../Shared/menu/pizzas/extras/extras.component';

@Injectable({
  providedIn: 'root',
})
export class PreventUnsavedChanges implements CanDeactivate<ExtrasComponent> {
  constructor(private router: Router) {}

  canDeactivate(component: ExtrasComponent ) {


      return confirm('Are you sure you want to continue? Any unsaved changes will be lost' ); 
    
    
    

    
    
  }
}
