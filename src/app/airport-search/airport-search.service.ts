import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Airport } from '../airport';

@Injectable()
export class AirportSearchService {

	constructor(private http: Http) {}

	search(term: string): Observable<Airport[]> {
		// TODO: adapt for use with real API
		return this.http
			.get(`app/airports/?name=${term}`)
			.map(response => response.json().data as Airport[]);
	}
}
