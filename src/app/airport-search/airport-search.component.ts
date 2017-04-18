import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { MIN_SEARCH_LENGTH, PAUSE, TEXT_SEARCHING, TEXT_NORESULTS } from "../../globals";

import { Observable } 			 from 'rxjs/Observable';
import { Subject }    			 from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { AirportSearchService } from './airport-search.service';
import { Airport } from '../airport';

const noop = () => { };

@Component({
	selector: 'airport-search',
	templateUrl: './airport-search.component.html',
	styleUrls: ['./airport-search.component.scss'],
	providers: [ AirportSearchService ]
})
export class AirportSearchComponent implements OnInit {

	public searchStr = '';
	private displaySearching = true;
  private _onTouchedCallback: () => void = noop;
	private _onChangeCallback: (_: any) => void = noop;

	airports: Observable<Airport[]>;
	selectedAirport: Airport;

	private searchTerms = new Subject<string>();

	constructor(
		private airportSearchService: AirportSearchService
	) {}



	// Push a search term into the observable stream
	search(term: string): void {
		this.searchTerms.next(term);
	}

	ngOnInit(): void {
		this.airports = this.searchTerms
			.debounceTime(300)		// wait 300ms after each keystroke before considering the term
			.distinctUntilChanged() // ignore if next search term is same as previous
			.switchMap(term => term
				? this.airportSearchService.search(term)
				: Observable.of<Airport[]>([]))
			.catch(error => {
				// TODO: add real error handling
				console.log(error);
				return Observable.of<Airport[]>([]);
			});
	}

	onSelect(airport: Airport): void {
		console.log('Selected Airport:', airport.name)
		this.selectedAirport = airport;
		// TODO: update value of searchbox with name of selected airport
		// TODO: close suggestion box

	// TODO: add logic for key events (esc, up, down, enter) to choose from suggestions
	}
}
