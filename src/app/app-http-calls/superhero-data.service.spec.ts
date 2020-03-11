import { TestBed } from '@angular/core/testing';

import { SuperheroDataService } from './superhero-data.service';

describe('SuperheroDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuperheroDataService = TestBed.get(SuperheroDataService);
    expect(service).toBeTruthy();
  });
});
