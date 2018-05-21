import { Component, OnInit } from '@angular/core';
import { CountryService, RootObject } from '../services/country.service';
import { } from "../sharedservice/sharedservice.service"

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  countrys: RootObject;
  Searched: Boolean;
  CapitalisChecked: boolean;
  PopulationisChecked: boolean;
  RegionisChecked: boolean;
  SubRegionisChecked: boolean;
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
  
  CapitalCheck(event:any){
    this.CapitalisChecked = !this.CapitalisChecked;
    console.log(event);
    console.log(this.CapitalisChecked);
    return this.CapitalisChecked;
    }
  PopulationCheck(event:any){
    this.PopulationisChecked = !this.PopulationisChecked;
    console.log(event);
    console.log(this.PopulationisChecked);
    return this.PopulationisChecked;
    }
  RegionCheck(event:any){
    this.RegionisChecked = !this.RegionisChecked;
    console.log(event);
    console.log(this.RegionisChecked);
    return this.RegionisChecked;
    }
  SubRegionCheck(event:any){
    this.SubRegionisChecked = !this.SubRegionisChecked;
    console.log(event);
    console.log(this.SubRegionisChecked);
    return this.SubRegionisChecked;
    }
}
