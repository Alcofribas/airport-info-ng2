import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NguiMapComponent } from '@ngui/map';

import { Airport } from '../airport';

@Component({
  selector: 'airport-detail-map',
  templateUrl: './airport-detail-map.component.html',
  styleUrls: ['./airport-detail-map.component.scss']
})
export class AirportDetailMapComponent implements OnInit, OnChanges {

  private _pos: any;

  @Input() airport: Airport;

  constructor() {}

  ngOnInit(){
    this._pos = this.airport ? this.getPosition(this.airport) : {lat: 0, lng: 0};
  }

  ngOnChanges(){
    this._pos = this.airport ? this.getPosition(this.airport) : this._pos;
  }

  private getPosition(airport: Airport) {
    return {
      lat: airport.latitude,
      lng: airport.longitude
    }
  }

}
