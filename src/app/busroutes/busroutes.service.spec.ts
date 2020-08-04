import { TestBed } from '@angular/core/testing';

import { BusroutesService } from './busroutes.service';

describe('BusroutesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusroutesService = TestBed.get(BusroutesService);
    expect(service).toBeTruthy();
  });
});
