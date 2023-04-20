import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LatLng} from "leaflet";

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) {}

  getLocations() {
    return this.http.get('http://localhost:8080/api/coordinates');

  }
}
