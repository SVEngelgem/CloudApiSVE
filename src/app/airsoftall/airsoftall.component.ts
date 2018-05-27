import { Component, OnInit } from '@angular/core';
import { RootModel, AirsoftService, IBrand } from '../services/airsoft.service';
import { } from "../sharedservice/sharedservice.service"

@Component({
  selector: 'app-airsoftall',
  templateUrl: './airsoftall.component.html',
  styleUrls: ['./airsoftall.component.scss']
})
export class AirsoftallComponent implements OnInit {
  models: RootModel;
  brands: IBrand;

  constructor(private _service: AirsoftService) { }

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
