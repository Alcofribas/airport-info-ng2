import { TestBed, inject } from '@angular/core/testing';

import { AirportService } from './airport.service';

describe('AirportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ AirportService ]
    });
  });

  it('should ...', inject([AirportService], (service: AirportService) => {
    expect(service).toBeTruthy();
  }));
});
