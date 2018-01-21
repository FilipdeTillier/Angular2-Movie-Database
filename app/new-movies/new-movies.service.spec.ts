import { TestBed, inject } from '@angular/core/testing';

import { NewMoviesService } from './new-movies.service';

describe('NewMoviesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewMoviesService]
    });
  });

  it('should be created', inject([NewMoviesService], (service: NewMoviesService) => {
    expect(service).toBeTruthy();
  }));
});
