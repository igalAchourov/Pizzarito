import { TestBed } from '@angular/core/testing';

import { ExtrasGuard } from './extras.guard';

describe('ExtrasGuard', () => {
  let guard: ExtrasGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ExtrasGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
