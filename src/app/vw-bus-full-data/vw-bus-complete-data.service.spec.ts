import { TestBed } from '@angular/core/testing';

import { VwBusCompleteDataService } from './vw-bus-complete-data.service';

describe('VwBusCompleteDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VwBusCompleteDataService = TestBed.get(VwBusCompleteDataService);
    expect(service).toBeTruthy();
  });
});
