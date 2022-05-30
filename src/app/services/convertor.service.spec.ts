import { TestBed } from '@angular/core/testing';

import { ConvertorService } from './convertor.service';

describe('ConvertorService', () => {
  let service: ConvertorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvertorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
