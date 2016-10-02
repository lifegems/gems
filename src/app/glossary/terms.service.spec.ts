/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TermsService } from './terms.service';

describe('Service: Terms', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TermsService]
    });
  });

  it('should ...', inject([TermsService], (service: TermsService) => {
    expect(service).toBeTruthy();
  }));
});
