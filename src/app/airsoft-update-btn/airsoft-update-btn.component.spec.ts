import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirsoftUpdateBtnComponent } from './airsoft-update-btn.component';

describe('AirsoftUpdateBtnComponent', () => {
  let component: AirsoftUpdateBtnComponent;
  let fixture: ComponentFixture<AirsoftUpdateBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirsoftUpdateBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirsoftUpdateBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
