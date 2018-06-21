import { TestBed, inject } from '@angular/core/testing';

import { SearchAndRetainService } from './search-and-retain.service';

describe('SearchAndRetainService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchAndRetainService]
    });
  });

  it('should be created', inject([SearchAndRetainService], (service: SearchAndRetainService) => {
    expect(service).toBeTruthy();
  }));
});
