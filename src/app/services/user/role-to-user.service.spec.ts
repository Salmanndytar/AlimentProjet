import { TestBed } from '@angular/core/testing';

import { RoleToUserService } from './role-to-user.service';

describe('RoleToUserService', () => {
  let service: RoleToUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleToUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
