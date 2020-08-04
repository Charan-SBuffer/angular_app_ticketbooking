import { TestBed } from '@angular/core/testing';

import { UserpageService } from './userpage.service';

describe('UserpageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserpageService = TestBed.get(UserpageService);
    expect(service).toBeTruthy();
  });
});
