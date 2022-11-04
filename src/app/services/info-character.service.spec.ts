import { TestBed } from '@angular/core/testing';

import { InfoCharacterService } from './info-character.service';

describe('InfoCharacterService', () => {
  let service: InfoCharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoCharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
