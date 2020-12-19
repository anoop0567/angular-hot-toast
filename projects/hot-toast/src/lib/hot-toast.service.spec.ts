import { TestBed } from '@angular/core/testing';

import { HotToastService } from './hot-toast.service';

describe('HotToastService', () => {
  let service: HotToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
