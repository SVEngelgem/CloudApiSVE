import { Component, OnInit } from '@angular/core';
import { AirsoftService } from '../services/airsoft.service';

@Component({
  selector: 'app-airsoft-update-btn',
  templateUrl: './airsoft-update-btn.component.html',
  styleUrls: ['./airsoft-update-btn.component.scss']
})
export class AirsoftUpdateBtnComponent implements OnInit {
  name: String;
  type: String;
  operatingsystem: String;
  propulsion:string;

  constructor(private _service: AirsoftService) { }

  ngOnInit() {
  }
  public SavenewModel(): void{
    this._service.PostModel(this.name,this.type,this.operatingsystem,this.propulsion)
      .subscribe(
        res => this.
      )
  }

}
