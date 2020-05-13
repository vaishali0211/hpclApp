import { TestBed } from '@angular/core/testing';

import {  restService } from './rest.service.service';

describe('Rest.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service:  restService = TestBed.get( restService);
    expect(service).toBeTruthy();
  });
});
