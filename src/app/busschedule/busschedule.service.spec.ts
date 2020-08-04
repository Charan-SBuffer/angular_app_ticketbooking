import { TestBed } from '@angular/core/testing';

import { BusscheduleService } from './busschedule.service';

describe('BusscheduleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusscheduleService = TestBed.get(BusscheduleService);
    expect(service).toBeTruthy();
  });
});
