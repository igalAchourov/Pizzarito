import { TestBed } from '@angular/core/testing';

import { PreventUnsavedChangesPaymentGuard } from './prevent-unsaved-changes-payment.guard';

describe('PreventUnsavedChangesPaymentGuard', () => {
  let guard: PreventUnsavedChangesPaymentGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PreventUnsavedChangesPaymentGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
