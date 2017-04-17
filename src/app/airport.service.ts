import { Injectable } from '@angular/core';
import { Headers, Http }    from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Airport } from './airport';

@Injectable()
export class AirportService {

	// TODO: is this component really necessary?
	private airportsApiBaseUrl = 'api/airports' // TODO: put real base URL to web API here

	private airportsApiQueryGet = this.airportsApiBaseUrl; // TODO: replace URL to web API
	private airportsApiIdGet = this.airportsApiBaseUrl; // TODO: replace URL to web API

	constructor(private http: Http) { }

	getAirports(query: string): Promise<Airport[]> {
		const airportsApiQueryGet = `${this.airportsApiBaseUrl}/${query}`; // NONSENSE
		return this.http.get(airportsApiQueryGet)
			.toPromise()
			.then(response => response.json().data as Airport[])
			.catch(this.handleError);
	}

	getAirport(id: number): Promise<Airport> {
		const airportsApiIdGet = `${this.airportsApiBaseUrl}/${id}`;
		return this.http.get(airportsApiIdGet)
			.toPromise()
			.then(response => response.json().data as Airport)
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
