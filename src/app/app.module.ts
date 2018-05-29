import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
//map voor detailpagina
import { AgmCoreModule } from '@agm/core';
//routing
import { RouterModule } from "@angular/router";
//services
import{ CountryService } from './services/country.service';
import { AirsoftService } from './services/airsoft.service';
//paging
import { NgxPaginationModule } from "ngx-pagination";
//components
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { DetailddescriptionComponent } from './detailddescription/detailddescription.component';
import { AirsoftModelDbComponent } from './airsoft-model-db/airsoft-model-db.component';
import { ListAllComponent } from './list-all/list-all.component';
import { AirsoftallComponent } from './airsoftall/airsoftall.component';
import { AirsoftUpdateBtnComponent } from './airsoft-update-btn/airsoft-update-btn.component';
import { AirosftAddComponent } from './airosft-add/airosft-add.component';
import { FormsModule } from '@angular/forms';
import { AirsoftAddBrandComponent } from './airsoft-add-brand/airsoft-add-brand.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    SearchComponent,
    ListAllComponent,
    DetailddescriptionComponent,
    AirsoftModelDbComponent,
    AirsoftallComponent,
    AirsoftUpdateBtnComponent,
    AirosftAddComponent,
    AirsoftAddBrandComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD5pqvcFtsCvi8Z6hVxeCeKiH6dZIkEqYI',
      libraries:["places"]
    }),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: 'search', component: SearchComponent},
      { path: 'detail', component: DetailddescriptionComponent},
      { path: 'airsoft', component: AirsoftModelDbComponent},
      { path: 'addairsoftmodel', component: AirosftAddComponent},
      { path: 'addairsoftbrand', component: AirsoftAddBrandComponent},
      //de routes hier plaatsen per module component
      { path: '', redirectTo: 'home', pathMatch: 'full'}
    ], { useHash: true }),
    HttpModule,
    NgxPaginationModule,
    FormsModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    CountryService,
    AirsoftService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
