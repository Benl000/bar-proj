import { TestBed } from '@angular/core/testing';

import { CocktailResolverService } from './cocktail-resolver.service';

describe('CocktailResolverService', () => {
  let service: CocktailResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CocktailResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
