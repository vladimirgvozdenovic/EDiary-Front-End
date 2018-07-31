import { Component, OnInit } from '@angular/core';
import { Student } from '../../../models/Student';
import { Parent } from '../../../models/Parent';
import { AuthService } from '../../../services/auth.service';
import { StudentService } from '../../../services/student.service';
import { ParentService } from '../../../services/parent.service';
import { User } from '../../../models/User';
import { TeacherTeachSubjectToSchoolClassToStudent } from '../../../models/TeacherTeachSubjectToSchoolClassToStudent';
import { Location } from '@angular/common';

@Component({
  selector: 'app-parent-home',
  templateUrl: './parent-home.component.html',
  styleUrls: ['./parent-home.component.css']
})
export class ParentHomeComponent implements OnInit {
  user: User;
  student: Student;
  students: Student[];
  parent: Parent;
  // username: String;
  teacherTeachSubjectToSchoolClassToStudents: TeacherTeachSubjectToSchoolClassToStudent[];

  constructor(
    private authService: AuthService,
    private studentService: StudentService,
    private parentService: ParentService,
    private location: Location
  ) { }

  ngOnInit() {
    this.user = this.authService.user;
    console.log(this.user);

    this.parentService.getParent(this.user.UserId).subscribe( parent => {
      this.parent = parent;
      console.log(this.parent);
      console.log('From subscribe parent-home.component.ts');
      this.students = parent.Students;
      console.log(this.students);
      console.log('From subscribe parent-home.component.ts');
  });
  }

  onChangeFirst(event): void {
    const newVal: string = event.target.value;
    console.log(newVal);
    this.studentService.getStudent(newVal).subscribe(student => {
      this.student = student;
      console.log(this.student);
      this.studentService.student = this.student;
    });
    // this.username = this.student.FirstName.toLowerCase() + '.' + this.student.LastName.toLowerCase();
  }

  goBack(): void {
    this.location.back();
  }

}
