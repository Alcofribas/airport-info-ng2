import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { AirportDetailComponent } from './airport-detail/airport-detail.component';
import { AirportSearchComponent } from './airport-search/airport-search.component';
import { AirportService } from './airport.service';
import { AirportDetailMapComponent } from './airport-detail-map/airport-detail-map.component';

@NgModule({
  declarations: [
    AppComponent,
    AirportDetailComponent,
    AirportSearchComponent,
    AirportDetailMapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [ AirportService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
