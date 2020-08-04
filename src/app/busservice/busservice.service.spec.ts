import { TestBed } from '@angular/core/testing';

import { BusserviceService } from './busservice.service';

describe('BusserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusserviceService = TestBed.get(BusserviceService);
    expect(service).toBeTruthy();
  });
});
