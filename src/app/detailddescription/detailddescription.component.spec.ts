import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailddescriptionComponent } from './detailddescription.component';

describe('DetailddescriptionComponent', () => {
  let component: DetailddescriptionComponent;
  let fixture: ComponentFixture<DetailddescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailddescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailddescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
