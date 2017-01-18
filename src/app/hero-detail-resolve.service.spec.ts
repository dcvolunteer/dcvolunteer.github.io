/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HeroDetailResolveService } from './hero-detail-resolve.service';

describe('HeroDetailResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroDetailResolveService]
    });
  });

  it('should ...', inject([HeroDetailResolveService], (service: HeroDetailResolveService) => {
    expect(service).toBeTruthy();
  }));
});
