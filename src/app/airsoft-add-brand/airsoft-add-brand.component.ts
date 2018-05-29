import { Component, OnInit } from '@angular/core';
import { AirsoftService } from '../services/airsoft.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-airsoft-add-brand',
  templateUrl: './airsoft-add-brand.component.html',
  styleUrls: ['./airsoft-add-brand.component.scss']
})
export class AirsoftAddBrandComponent implements OnInit {
  name: String;
  specialization: String;
  public NameInput: String ="";
  public SpeciInput: String ="";

  constructor(private _service: AirsoftService, private router :Router) { }

  ngOnInit() {
    this.NameInput;
    this.SpeciInput;
  }
  public SaveNewModel(): void{
    this._service.PostBrand(this.name,this.specialization)
      .subscribe(
      )
  }
  OnCheck():void{
    this.name = this.NameInput;
    this.specialization = this.SpeciInput;
    console.log(this.name);
    console.log(this.specialization);
    this.SaveNewModel();
    this.router.navigate(['/airsoft'])
  }

}
