import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';

import { Student } from '../../../models/Student';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit, AfterViewInit {

  students$: Observable<Student[]>;
  private searchTerm = new Subject<string>();
  students: Student[];

  constructor(private studentService: StudentService) { }

  search(term: string) {
    this.searchTerm.next(term);
  }

  ngOnInit() {
    this.students = this.studentService.students;
    this.students$ = this.searchTerm.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((term: string) => this.studentService.searchStudentsFromList(term, this.students))
    );
    console.log(this.students$);
    console.log('students from student-list');
  }

  ngAfterViewInit(): void {
    this.search('');
  }

}
