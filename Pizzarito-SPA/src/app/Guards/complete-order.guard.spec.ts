import { TestBed } from '@angular/core/testing';

import { CompleteOrderGuard } from './complete-order.guard';

describe('CompleteOrderGuard', () => {
  let guard: CompleteOrderGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CompleteOrderGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
