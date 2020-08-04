import { TestBed } from '@angular/core/testing';

import { TickethistoryserService } from './tickethistoryser.service';

describe('TickethistoryserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TickethistoryserService = TestBed.get(TickethistoryserService);
    expect(service).toBeTruthy();
  });
});
