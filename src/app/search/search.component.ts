import { Component, OnInit } from '@angular/core';
import { CountryService, RootObject } from '../services/country.service';
import { } from "../sharedservice/sharedservice.service"
import { ActivatedRoute, Router, Params, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  countrys: RootObject;
  Searched: Boolean;
  CapitalisChecked: boolean = true;
  PopulationisChecked: boolean = true;
  RegionisChecked: boolean = true;
  SubRegionisChecked: boolean = true;
  searchvalue: string;
  constructor(private _service: CountryService, private route: ActivatedRoute, private router: Router) { 
    //herladen van de huidige pagina om de parameters van de url te kunnen verwerken
    //oplossing van dit probleem gevonden van https://github.com/angular/angular/issues/13831
         // override the route reuse strategy
         this.router.routeReuseStrategy.shouldReuseRoute = function(){
          return false;
       }
  
       this.router.events.subscribe((evt) => {
          if (evt instanceof NavigationEnd) {
             // trick the Router into believing it's last link wasn't previously loaded
             this.router.navigated = false;
             // if you need to scroll back to top, here is the right place
             window.scrollTo(0, 0);
          }
      });
  
  }
  

  getCountrys(name: String): void{
    this._service.SearchICountrys(name)
      .subscribe(
        result => this.countrys = result,
        error => console.log("Error :: " + error)

      )
  }
  ngOnInit() {
    this.GetSearchParam();

  }
  ActivateSearch(searchentry:string){
    this.router.navigate(["/search"], {queryParams:{searchinput: searchentry}});
  }
  DetailedSearch(detailentry:any){
    console.log(detailentry);
    this.router.navigate(["/detail"], {queryParams:{searchinput: detailentry}});
  }
  GetSearchParam(){
    this.route.queryParams.subscribe(
      params => { 
        let search = params["searchinput"];
        this.searchvalue = search;
        console.log(this.searchvalue); 
      });
      this.getCountrys(this.searchvalue);
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
