import { TestBed, inject } from '@angular/core/testing';

import { AirsoftService } from './airsoft.service';

describe('AirsoftService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AirsoftService]
    });
  });

  it('should be created', inject([AirsoftService], (service: AirsoftService) => {
    expect(service).toBeTruthy();
  }));
});
