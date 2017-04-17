import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportDetailMapComponent } from './airport-detail-map.component';

describe('AirportDetailMapComponent', () => {
  let component: AirportDetailMapComponent;
  let fixture: ComponentFixture<AirportDetailMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirportDetailMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportDetailMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
