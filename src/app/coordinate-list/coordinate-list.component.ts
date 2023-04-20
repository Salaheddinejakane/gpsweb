import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-coordinate-list',
  templateUrl: './coordinate-list.component.html',
  styleUrls: ['./coordinate-list.component.css']
})
export class CoordinateListComponent implements OnInit{

  coordinates: Observable<any> | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.coordinates = this.http.get(' http://localhost:8080/api/coordinates');
  }

}
