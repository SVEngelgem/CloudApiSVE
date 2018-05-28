import { Component, OnInit, Type } from '@angular/core';
import { AirsoftService } from '../services/airsoft.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-airosft-add',
  templateUrl: './airosft-add.component.html',
  styleUrls: ['./airosft-add.component.scss']
})
export class AirosftAddComponent implements OnInit {
  name: String;
  type: String;
  operatingsystem: String;
  propulsion:String;
  brandidinput: number;
  public TypeData: String ="";
  public OSdata: String = "";
  public Propulsiondata: String = "";
  public NameInput:String = "";
  public BrandId: number;
  constructor(private _service: AirsoftService, private router :Router) { }

  ngOnInit() {
    this.TypeData;
    this.OSdata;
    this.Propulsiondata;
    this.NameInput;
    this.BrandId
  }
  public SavenewModel(): void{
    this._service.PostModel(this.name,this.type,this.operatingsystem,this.propulsion, this.BrandId)
      .subscribe(
      )
  }
  OnCheck():void{
    this.name = this.NameInput;
    this.type = this.TypeData;
    this.operatingsystem = this.OSdata;
    this.propulsion = this.Propulsiondata;
    this.brandidinput = this.BrandId
    console.log(this.name);
    console.log(this.TypeData);
    console.log(this.OSdata);
    console.log(this.Propulsiondata);
    console.log(this.BrandId)
    this.SavenewModel();
    this.router.navigate(['airsoft'])
  }

}
