import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TtstsctStudentListComponent } from './ttstsct-student-list.component';

describe('TtstsctStudentListComponent', () => {
  let component: TtstsctStudentListComponent;
  let fixture: ComponentFixture<TtstsctStudentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TtstsctStudentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TtstsctStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
