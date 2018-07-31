import { TestBed, inject } from '@angular/core/testing';

import { FinaleGradeService } from './finale-grade.service';

describe('FinaleGradeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinaleGradeService]
    });
  });

  it('should be created', inject([FinaleGradeService], (service: FinaleGradeService) => {
    expect(service).toBeTruthy();
  }));
});
