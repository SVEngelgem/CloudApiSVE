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
import { ListAllComponent } from './list-all/list-all.component';
//paging
import { NgxPaginationModule } from "ngx-pagination";
//components
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { DetailddescriptionComponent } from './detailddescription/detailddescription.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    SearchComponent,
    ListAllComponent,
    DetailddescriptionComponent
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
      //de routes hier plaatsen per module component
      { path: '', redirectTo: 'home', pathMatch: 'full'}
    ], { useHash: true }),
    HttpModule,
    NgxPaginationModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    CountryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
