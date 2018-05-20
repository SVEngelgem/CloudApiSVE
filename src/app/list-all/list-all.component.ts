import { Component, OnInit } from '@angular/core';
import { CountryService, RootObject } from '../services/country.service';


@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.scss']
})
export class ListAllComponent implements OnInit {
  countrys: RootObject;
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
