import {Component, OnInit} from '@angular/core';
import * as L from 'leaflet';


import 'leaflet-polylinedecorator';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private map: any;
  private data: any[];

  constructor(private http: HttpClient) {}
  public onClick(location: any): void {
    alert(location.name);
  }

  ngOnInit() {
    this.map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
      maxZoom: 18,
    }).addTo(this.map);

    this.http.get<any[]>('http://localhost:8080/api/coordinates').subscribe((data) => {
      this.data = data;
      this.addMarkers();
    });
  }

  private addMarkers() {
    this.data.forEach((item) => {
      const marker = L.marker([item.latitude, item.longitude]).addTo(this.map);
      marker.on('click', () => {
        const popup = L.popup().setContent(item.description);
        marker.bindPopup(popup).openPopup();
      });
    });

  }

}
