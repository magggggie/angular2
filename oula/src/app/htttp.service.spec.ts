/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HtttpService } from './htttp.service';

describe('HtttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HtttpService]
    });
  });

  it('should ...', inject([HtttpService], (service: HtttpService) => {
    expect(service).toBeTruthy();
  }));
});
