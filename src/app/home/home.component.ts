import { Component, OnInit } from '@angular/core';
import { CountryService, RootObject } from '../services/country.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  countrys: RootObject;

  constructor(private _service: CountryService) { }

  getCountrys(): void{
    this._service.getICountrys()
      .subscribe(
        result => this.countrys = result,
        error => console.log("Error :: " + error)

      )
  }
  ngOnInit() {
    this.getCountrys();
  }

}
