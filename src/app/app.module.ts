import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoordinateListComponent } from './coordinate-list/coordinate-list.component';
import {HttpClientModule} from "@angular/common/http";
import { MapComponent } from './map/map.component';
import {LeafletModule} from "@asymmetrik/ngx-leaflet";

@NgModule({
  declarations: [
    AppComponent,
    CoordinateListComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    LeafletModule,
    HttpClientModule, //add this line
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
