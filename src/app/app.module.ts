import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    SearchComponent,
    ListAllComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: 'search', component: SearchComponent},
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
