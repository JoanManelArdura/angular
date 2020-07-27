import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorinsComponent } from './colorins.component';

describe('ColorinsComponent', () => {
  let component: ColorinsComponent;
  let fixture: ComponentFixture<ColorinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
