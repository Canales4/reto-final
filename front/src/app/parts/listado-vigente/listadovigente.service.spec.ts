import { TestBed, inject } from '@angular/core/testing';

import { ListadovigenteService } from './listadovigente.service';

describe('ListadovigenteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListadovigenteService]
    });
  });

  it('should be created', inject([ListadovigenteService], (service: ListadovigenteService) => {
    expect(service).toBeTruthy();
  }));
});
