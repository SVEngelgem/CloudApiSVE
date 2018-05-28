import { Component, OnInit } from '@angular/core';
import { RootModel, AirsoftService, IBrand } from '../services/airsoft.service';
import { } from "../sharedservice/sharedservice.service"
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-airsoftall',
  templateUrl: './airsoftall.component.html',
  styleUrls: ['./airsoftall.component.scss']
})
export class AirsoftallComponent implements OnInit {
  models: RootModel;
  brands: IBrand;

  constructor(private _service: AirsoftService, private router: Router) { 
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

  ngOnInit() {
    this.GetAllModels();
    this.GetAllBrands();
  }
  GetAllModels(): void{
    this._service.GetAllModels()
      .subscribe(
        result => this.models = result,
        error => console.log("Error :: "+ error),
        
      )
  }
  GetAllBrands(): void{
    this._service.GetAllBrands()
      .subscribe(
        result => this.brands = result,
        error => console.log("Error :: "+ error),
        
      )
  }
}
