import { TestBed } from '@angular/core/testing';

import { LlibresSeleccionatsService } from './llibres-seleccionats.service';

describe('LlibresSeleccionatsService', () => {
  let service: LlibresSeleccionatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LlibresSeleccionatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
