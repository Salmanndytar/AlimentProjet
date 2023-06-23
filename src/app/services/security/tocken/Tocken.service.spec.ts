import { TestBed } from '@angular/core/testing';

import { Tocken } from './Tocken';

describe('SecurityService', () => {
  let service: Tocken;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tocken);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
