import { TestBed } from '@angular/core/testing';

import { PathesService } from './pathes.service';

describe('PathesService', () => {
  let service: PathesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PathesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
