import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { NguiMapModule} from '@ngui/map';

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
    JsonpModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyD-Eag6_FSnEa7znYR67uUh8e0zYZELK0k&callback=initMap'}),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [ AirportService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
