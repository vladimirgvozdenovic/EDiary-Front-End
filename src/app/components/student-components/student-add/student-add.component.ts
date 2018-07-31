import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../services/student.service';
import { SchoolClassService } from '../../../services/school-class.service';
import { Student } from '../../../models/Student';
import { SchoolClass } from '../../../models/SchoolClass';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { StudentDTO } from '../../../models/StudentDTO';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  student: Student;
  schoolClasses: SchoolClass[];
  studentDto: StudentDTO;

  constructor(
    private router: Router,
    private studentService: StudentService,
    private schoolClassService: SchoolClassService,
    private location: Location,
  ) { this.student = new Student(); this.studentDto = new StudentDTO(); }

  ngOnInit() {
    this.getSchoolClasses();
  }

  getSchoolClasses() {
    this.schoolClassService.getSchoolClasses().subscribe(
      schoolClasses => {
        this.schoolClasses = schoolClasses;
        console.log(this.schoolClasses);
        console.log(this.schoolClasses[0]);
        this.student.SchoolClass = this.schoolClasses[0];
        console.log(this.student.SchoolClass);
      }
    );
  }

  addStudent(firstName: string, lastName: string, email: string/*, schoolClass: string*/) {
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    // console.log(schoolClass);
    console.log(this.student.SchoolClass.Id);
    /*this.student.FirstName = firstName;
    this.student.LastName = lastName;
    this.student.Email = email;
    this.schoolClassService.getSchoolClass(schoolClassId).subscribe(schoolClass => this.student.SchoolClass = schoolClass);

    this.studentService.addStudent(this.student)
      .subscribe((student: Student) => {
        alert('Student ' + student.FirstName + ' ' + student.LastName + ' je uspešno dodat!');
        this.router.navigate(['/admin-home']);
      });*/
  }

  goBack() {
    this.location.back();
  }
}
