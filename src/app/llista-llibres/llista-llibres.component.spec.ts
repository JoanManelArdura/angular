import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaLlibresComponent } from './llista-llibres.component';

describe('LlistaLlibresComponent', () => {
  let component: LlistaLlibresComponent;
  let fixture: ComponentFixture<LlistaLlibresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LlistaLlibresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LlistaLlibresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
