import { TestBed, inject } from '@angular/core/testing';

import { SemesterGradeService } from './semester-grade.service';

describe('SemesterGradeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SemesterGradeService]
    });
  });

  it('should be created', inject([SemesterGradeService], (service: SemesterGradeService) => {
    expect(service).toBeTruthy();
  }));
});
