import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TtstsctStudentComponent } from './ttstsct-student.component';

describe('TtstsctStudentComponent', () => {
  let component: TtstsctStudentComponent;
  let fixture: ComponentFixture<TtstsctStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TtstsctStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TtstsctStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
