import { Injectable } from '@angular/core';
import { Http , Response} from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import { log } from 'util';

@Injectable()
export class CountryService {
    private _countrysURL = "https://restcountries.eu/rest/v2/all";
 
    constructor(private http: Http) {
    }

    getICountrys(): Observable<RootObject> {
        return this.http
            .get(this._countrysURL)
            .map((response: Response) => {
                var result = <RootObject>response.json();
                console.log(result);
                return result;
            })
            .catch(this.handleError);
     }
     private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}
  export interface Currency {
      code: string;
      name: string;
      symbol: string;
  }

  export interface Language {
      iso639_1: string;
      iso639_2: string;
      name: string;
      nativeName: string;
  }

  export interface Translations {
      de: string;
      es: string;
      fr: string;
      ja: string;
      it: string;
      br: string;
      pt: string;
      nl: string;
      hr: string;
      fa: string;
  }

  export interface RegionalBloc {
      acronym: string;
      name: string;
      otherAcronyms: any[];
      otherNames: any[];
  }

  export interface RootObject {
      name: string;
      topLevelDomain: string[];
      alpha2Code: string;
      alpha3Code: string;
      callingCodes: string[];
      capital: string;
      altSpellings: string[];
      region: string;
      subregion: string;
      population: number;
      latlng: number[];
      demonym: string;
      area: number;
      gini: number;
      timezones: string[];
      borders: string[];
      nativeName: string;
      numericCode: string;
      currencies: Currency[];
      languages: Language[];
      translations: Translations;
      flag: string;
      regionalBlocs: RegionalBloc[];
      cioc: string;
  }
