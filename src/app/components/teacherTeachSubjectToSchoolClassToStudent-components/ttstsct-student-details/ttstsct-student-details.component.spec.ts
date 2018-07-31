import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TtstsctStudentDetailsComponent } from './ttstsct-student-details.component';

describe('TtstsctStudentDetailsComponent', () => {
  let component: TtstsctStudentDetailsComponent;
  let fixture: ComponentFixture<TtstsctStudentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TtstsctStudentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TtstsctStudentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
