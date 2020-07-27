import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreNosaltresComponent } from './sobre-nosaltres.component';

describe('SobreNosaltresComponent', () => {
  let component: SobreNosaltresComponent;
  let fixture: ComponentFixture<SobreNosaltresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobreNosaltresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreNosaltresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
