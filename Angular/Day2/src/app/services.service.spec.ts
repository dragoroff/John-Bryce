/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PizzaService } from './services.service';

describe('PizzaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PizzaService]
    });
  });

  it('should ...', inject([PizzaService], (service: PizzaService) => {
    expect(service).toBeTruthy();
  }));
});
