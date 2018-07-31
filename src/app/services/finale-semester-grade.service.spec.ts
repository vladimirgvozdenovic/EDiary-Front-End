import { TestBed, inject } from '@angular/core/testing';

import { FinaleSemesterGradeService } from './finale-semester-grade.service';

describe('FinaleSemesterGradeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinaleSemesterGradeService]
    });
  });

  it('should be created', inject([FinaleSemesterGradeService], (service: FinaleSemesterGradeService) => {
    expect(service).toBeTruthy();
  }));
});
