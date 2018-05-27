import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirsoftModelDbComponent } from './airsoft-model-db.component';

describe('AirsoftModelDbComponent', () => {
  let component: AirsoftModelDbComponent;
  let fixture: ComponentFixture<AirsoftModelDbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirsoftModelDbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirsoftModelDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
