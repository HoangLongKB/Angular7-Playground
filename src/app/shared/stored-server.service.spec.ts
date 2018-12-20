import { TestBed } from '@angular/core/testing';

import { StoredServerService } from './stored-server.service';

describe('StoredServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoredServerService = TestBed.get(StoredServerService);
    expect(service).toBeTruthy();
  });
});
