import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../../../models/Student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() student: Student;
  username: string;

  constructor() { }

  ngOnInit() {
    console.log(this.student);
    console.log('student from student.component.ts');
    this.username = this.student.FirstName.toLowerCase() + '.' + this.student.LastName.toLowerCase();
  }

}

