import { TestBed } from '@angular/core/testing';

import { PageChangedService } from './page-changed.service';

describe('PageChangedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageChangedService = TestBed.get(PageChangedService);
    expect(service).toBeTruthy();
  });
});
