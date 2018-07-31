import { TestBed, inject } from '@angular/core/testing';

import { TtstsctStudentService } from './ttstsct-student.service';

describe('TtstsctStudentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TtstsctStudentService]
    });
  });

  it('should be created', inject([TtstsctStudentService], (service: TtstsctStudentService) => {
    expect(service).toBeTruthy();
  }));
});
