import { Component, Input, OnInit } from '@angular/core';
import { Airport } from '../airport';

@Component({
  selector: 'airport-detail-map',
  templateUrl: './airport-detail-map.component.html',
  styleUrls: ['./airport-detail-map.component.scss']
})
export class AirportDetailMapComponent implements OnInit {

  @Input() airport: Airport;

  ngOnInit(){
    // TODO: Initialize map!
  }

}
