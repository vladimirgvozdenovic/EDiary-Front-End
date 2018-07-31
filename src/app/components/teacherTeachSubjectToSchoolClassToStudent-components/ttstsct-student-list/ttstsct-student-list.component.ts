import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';

import { TeacherTeachSubjectToSchoolClassToStudent } from '../../../models/TeacherTeachSubjectToSchoolClassToStudent';
import { TtstsctStudentService } from '../../../services/ttstsct-student.service';

@Component({
  selector: 'app-ttstsct-student-list',
  templateUrl: './ttstsct-student-list.component.html',
  styleUrls: ['./ttstsct-student-list.component.css']
})
export class TtstsctStudentListComponent implements OnInit, AfterViewInit {

  teacherTeachSubjectToSchoolClassToStudents$: Observable<TeacherTeachSubjectToSchoolClassToStudent[]>;
  private searchTerm = new Subject<string>();
  teacherTeachSubjectToSchoolClassToStudents: TeacherTeachSubjectToSchoolClassToStudent[];

  constructor(private ttstsctStudentService: TtstsctStudentService) { }

  search(term: string) {
    this.searchTerm.next(term);
  }

  ngOnInit() {
    this.teacherTeachSubjectToSchoolClassToStudents = this.ttstsctStudentService.teacherTeachSubjectToSchoolClassToStudents;
    this.teacherTeachSubjectToSchoolClassToStudents$ = this.searchTerm.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((term: string) => this.ttstsctStudentService.searchTeacherTeachSubjectToSchoolClassToStudentsFromList(
        term, this.teacherTeachSubjectToSchoolClassToStudents
      ))
    );
    console.log(this.teacherTeachSubjectToSchoolClassToStudents$);
    console.log('teacherTeachSubjectToSchoolClassToStudents from ttstsct-student-list.component.ts');
  }

  ngAfterViewInit(): void {
    this.search('');
  }

}
