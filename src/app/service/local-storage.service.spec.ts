import { TestBed } from '@angular/core/testing';

import { LocalStorage } from './local-storage.service';

describe('LocalStorage.Service', () => {
  let service: LocalStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
