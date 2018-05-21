import { Component, OnInit } from '@angular/core';
import { CountryService, RootObject } from '../services/country.service';
import { } from "../sharedservice/sharedservice.service"


@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.scss']
})
export class ListAllComponent implements OnInit {
  countrys: RootObject;
  Searched: Boolean;
  
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
  ActivateSearch(searchentry:string){
    console.log(searchentry);
  }
}
