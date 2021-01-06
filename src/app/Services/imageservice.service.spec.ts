import { TestBed } from '@angular/core/testing';

import { ImageserviceService } from './imageservice.service';

describe('ImageserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageserviceService = TestBed.get(ImageserviceService);
    expect(service).toBeTruthy();
  });
});
