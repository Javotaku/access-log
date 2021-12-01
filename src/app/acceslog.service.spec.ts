import { TestBed } from '@angular/core/testing';

import { AcceslogService } from './acceslog.service';

describe('AcceslogService', () => {
  let service: AcceslogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcceslogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
