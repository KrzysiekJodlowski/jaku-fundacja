import { TestBed } from '@angular/core/testing';

import { WebstorageService } from './webstorage.service';

describe('WebstorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebstorageService = TestBed.get(WebstorageService);
    expect(service).toBeTruthy();
  });
});
