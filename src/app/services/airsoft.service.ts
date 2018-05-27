import { Injectable } from '@angular/core';
import { Http , Response} from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import { log } from 'util';
import { Resolve } from '@angular/router';

@Injectable()
export class AirsoftService {
  private _airsoftURL = "http://localhost:5000/api/v1/";

  constructor(private http: Http) {
  }

  GetAllModels(): Observable<RootModel>{
    return this.http
    .get(this._airsoftURL+"Models")
    .map((response: Response) => {
        var result = <RootModel>response.json();
        console.log(result);
        return result;
    })
    .catch(this.handleErrorModelAll);
  }
  private handleErrorModelAll(error: Response){{
    return Observable.throw(error.statusText);
  }
  }
  GetAllBrands(): Observable<IBrand>{
    return this.http
    .get(this._airsoftURL+"Brands")
    .map((response: Response) => {
        var result = <IBrand>response.json();
        console.log(result);
        return result;
    })
    .catch(this.handleErrorBrandAll);
  }
  private handleErrorBrandAll(error: Response){{
    return Observable.throw(error.statusText);
  }
  }
  PostModel(name, type, operatingsystem, propulsion):Observable<RootModel>{
    return this.http
      .post(this._airsoftURL+"Models",{name, type, operatingsystem, propulsion})
      .map((response: Response) => {
        var result = <RootModel>response.json();
        console.log(result);
        return result;
    })
    .catch(this.handleErrorModelPost);
  }
  private handleErrorModelPost(error: Response){{
    return Observable.throw(error.statusText);
  }
}

}
export interface IBrand {
  id: number;
  name: string;
  specialization: string;
}

export interface RootModel {
  id: number;
  name: string;
  type: string;
  operatingsystem: string;
  propulsion: string;
  brand: IBrand;
}