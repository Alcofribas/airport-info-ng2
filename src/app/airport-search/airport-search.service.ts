import { Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Airport } from '../airport';

@Injectable()
export class AirportSearchService {

	private inMemoryWebApiBaseUrl = 'api/airports/?name=' // TODO: put real base URL to web API here
	private paxlifeApiQueryGetUrl = 'https://sandbox.paxlife.aero/api/search/';
	private ApiBaseUrl = this.inMemoryWebApiBaseUrl;

	constructor(
		private http: Http,
		private jsonp: Jsonp
	) {}

	search(term: string): Observable<Airport[]> {
		console.log('Using In-memory Web API');
		return this
			.http.get(`${this.ApiBaseUrl}${term}`)
			.map(response => response.json().data as Airport[]);
	}

	searchAPI(term: string): Observable<Airport[]> {
		console.log('Using Test API');
		let params = new URLSearchParams();
		params.set('callback', 'JSONP_CALLBACK');
		params.set('dataType', 'jsonp');
		return this.jsonp.get(`${this.paxlifeApiQueryGetUrl}${term}`, {search:params})
			.map(response => response.json().data as Airport[])
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		// for demo purposes only, TODO: add proper error handling
		console.error('An error occurred: ', error);
		return Promise.reject(error.message || error);
	}
}
