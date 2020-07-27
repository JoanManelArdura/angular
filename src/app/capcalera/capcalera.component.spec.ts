import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapcaleraComponent } from './capcalera.component';

describe('CapcaleraComponent', () => {
  let component: CapcaleraComponent;
  let fixture: ComponentFixture<CapcaleraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapcaleraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapcaleraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
