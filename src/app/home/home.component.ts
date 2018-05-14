import { Component, OnInit } from '@angular/core';
import { CountryService, RootObject } from '../services/country.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  country: RootObject;

  constructor(private _service: CountryService) { }

  ngOnInit() {
    this._service.getICountry("belgium")
      .subscribe(result => this.country = result);
      
  }

}
