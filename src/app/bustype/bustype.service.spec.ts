import { TestBed } from '@angular/core/testing';

import { BustypeService } from './bustype.service';

describe('BustypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BustypeService = TestBed.get(BustypeService);
    expect(service).toBeTruthy();
  });
});
