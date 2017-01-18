/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DashboardResolveService } from './dashboard-resolve.service';

describe('DashboardResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardResolveService]
    });
  });

  it('should ...', inject([DashboardResolveService], (service: DashboardResolveService) => {
    expect(service).toBeTruthy();
  }));
});
