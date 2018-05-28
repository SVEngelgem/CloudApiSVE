import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirosftAddComponent } from './airosft-add.component';

describe('AirosftAddComponent', () => {
  let component: AirosftAddComponent;
  let fixture: ComponentFixture<AirosftAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirosftAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirosftAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
