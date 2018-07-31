import { Component, OnInit } from '@angular/core';
import { Student } from '../../../models/Student';
import { AuthService } from '../../../services/auth.service';
import { StudentService } from '../../../services/student.service';
import { User } from '../../../models/User';
import { TeacherTeachSubjectToSchoolClassToStudent } from '../../../models/TeacherTeachSubjectToSchoolClassToStudent';
import { Location } from '@angular/common';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {
  user: User;
  student: Student;
  username: String;
  teacherTeachSubjectToSchoolClassToStudents: TeacherTeachSubjectToSchoolClassToStudent[];

  constructor(private authService: AuthService, private studentService: StudentService, private location: Location) { }

  ngOnInit() {
    if (this.studentService.student) {
      this.student = this.studentService.student;
      this.teacherTeachSubjectToSchoolClassToStudents = this.student.TeacherTeachSubjectToSchoolClassToStudents;
      console.log(this.teacherTeachSubjectToSchoolClassToStudents);
      console.log('From if subscribe teacher-home.component.ts');
      this.username = this.student.FirstName.toLowerCase() + '.' + this.student.LastName.toLowerCase();
    } else {
      this.user = this.authService.user;

      this.studentService.getStudent(this.user.UserId).subscribe( student => {
        this.student = student;
        console.log(this.student);
        console.log('From else subscribe student-home.component.ts');
        this.teacherTeachSubjectToSchoolClassToStudents = student.TeacherTeachSubjectToSchoolClassToStudents;
        console.log(this.teacherTeachSubjectToSchoolClassToStudents);
        console.log('From else subscribe teacher-home.component.ts');
        this.username = this.student.FirstName.toLowerCase() + '.' + this.student.LastName.toLowerCase();
      });
    }
  }

  goBack(): void {
    this.location.back();
  }

}
