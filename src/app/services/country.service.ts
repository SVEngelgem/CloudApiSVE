import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CountryService {

  constructor(private _http: HttpClient) { }

  getICountrys(): Observable<RootObject>{
    return this._http.get<RootObject>("https://restcountries.eu/rest/v2/all")
  }
  getICountry(input:String): Observable<RootObject>{
    return this._http.get<RootObject>("https://restcountries.eu/rest/v2/name/"+input)
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
