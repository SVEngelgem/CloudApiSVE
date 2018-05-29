import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirsoftAddBrandComponent } from './airsoft-add-brand.component';

describe('AirsoftAddBrandComponent', () => {
  let component: AirsoftAddBrandComponent;
  let fixture: ComponentFixture<AirsoftAddBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirsoftAddBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirsoftAddBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
