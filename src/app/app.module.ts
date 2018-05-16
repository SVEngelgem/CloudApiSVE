import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { HttpModule } from '@angular/http';
//routing
import { RouterModule } from "@angular/router";
//services
import{ CountryService } from './services/country.service'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    SearchComponent

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
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    CountryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
