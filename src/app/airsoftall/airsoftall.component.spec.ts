import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirsoftallComponent } from './airsoftall.component';

describe('AirsoftallComponent', () => {
  let component: AirsoftallComponent;
  let fixture: ComponentFixture<AirsoftallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirsoftallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirsoftallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
