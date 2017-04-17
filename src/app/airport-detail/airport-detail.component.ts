import { Component, Input, OnInit } from '@angular/core';
import { Location }                 from '@angular/common';

import { AirportService } from '../airport.service';
import { AirportSearchComponent } from '../airport-search/airport-search.component'
import { AirportDetailMapComponent } from '../airport-detail-map/airport-detail-map.component'
import { Airport } from '../airport'

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'airport-detail',
	templateUrl: './airport-detail.component.html',
	styleUrls: ['./airport-detail.component.scss']
})
export class AirportDetailComponent implements OnInit {

	@Input() airport: Airport;

	// airport: Airport = {
	// 	"city": "Lubango",
	// 	"country": "Angola",
	// 	"iata": "SDD",
	// 	"icao": "FNUB",
	// 	"id": 959,
	// 	"latitude": -14.9246997833252,
	// 	"longitude": 13.5749998092651,
	// 	"name": "Lubango Airport"
	// };

	constructor(
		private airportService: AirportService,
	) {}

	ngOnInit(): void {
		// this.route.params
		//	.switchMap((params: Params) =>
		//		this.airportService.getAirport(+params['id']))
		//	.subscribe(airport => this.airport = airport);
	}
}
