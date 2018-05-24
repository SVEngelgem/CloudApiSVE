import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CountryService, RootObject } from '../services/country.service';
import { Observable } from 'rxjs';
import { google, LatLng } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-detailddescription',
  templateUrl: './detailddescription.component.html',
  styleUrls: ['./detailddescription.component.scss']
})
export class DetailddescriptionComponent implements OnInit {
  lat: number = 51.2196598;
  lng: number = 4.4044685;
  searchvalue: string;
  countrys: RootObject;
  //details: DetailList;

  constructor(private router: Router, private route: ActivatedRoute, private _service:CountryService) { }

  ngOnInit() { 
    this.GetSearchParam();

  }
  
  ActivateSearch(searchentry:string){
    this.router.navigate(["/search"], {queryParams:{searchinput: searchentry}});
  }
  getCountrys(name: String): void{
    this._service.SearchICountrys(name)
      .subscribe(
        result => {
          this.countrys = result,this.SetCoordinateValue(); },
        error => console.log("Error :: " + error),
        

      )
      
      
  }
  SetCoordinateValue(){
    console.log(this.countrys[0].latlng);
    this.lat = this.countrys[0].latlng[0];
    this.lng = this.countrys[0].latlng[1];
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
}
