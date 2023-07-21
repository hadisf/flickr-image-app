import { TestBed } from '@angular/core/testing';

import { FlickrRssService } from './flickr.service';

describe('FlickrService', () => {
  let service: FlickrRssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlickrRssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
