import { Component, OnInit } from '@angular/core';
import { CountryService, RootObject } from '../services/country.service';
import { } from "../sharedservice/sharedservice.service"
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/filter';

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
  searchvalue: string;
  constructor(private _service: CountryService, private route: ActivatedRoute, private router: Router) { }
  

  getCountrys(name: String): void{
    this._service.SearchICountrys(name)
      .subscribe(
        result => this.countrys = result,
        error => console.log("Error :: " + error)

      )
  }
  ngOnInit() {
    this.GetSearchParam();

    //in oefening plaatsen

    //        this.getCountrys(this.searchvalue);
    
  }
  ActivateSearch(searchentry:string){
    this.router.navigate(["/search"], {queryParams:{searchinput: searchentry}});
  }
  GetSearchParam(){
    this.route.queryParams
    .filter(params => params.order)
    .subscribe(params => {
      console.log(params); // {order: "popular"}

      this.searchvalue = params.order;
      console.log(this.searchvalue); // popular
    });
      
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
