import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Student } from '../../../models/Student';
import { StudentDTO } from '../../../models/StudentDTO';
import { StudentService } from '../../../services/student.service';
import { SchoolClassService } from '../../../services/school-class.service';
import { SchoolClass } from '../../../models/SchoolClass';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {
  student: Student;
  schoolClasses: SchoolClass[] = [];
  studentDto: StudentDTO;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private studentService: StudentService,
              private schoolClassService: SchoolClassService) {
    this.student = new Student();
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.studentService.getStudent(id).subscribe(a => {this.student = a; console.log(this.student); });
    this.getSchoolClasses();
  }

  getSchoolClasses() {
    this.schoolClassService.getSchoolClasses().subscribe(t => this.schoolClasses = t);
  }

  editStudent() {
    console.log(this.student);
    this.studentDto = new StudentDTO();
    this.studentDto.UserId = this.student.UserId;
    this.studentDto.FirstName = this.student.FirstName;
    this.studentDto.LastName = this.student.LastName;
    this.studentDto.Email = this.student.Email;
    this.studentDto.SchoolClassId = this.student.SchoolClassId;

    this.studentService.updateStudent(this.studentDto)
    .subscribe((studentDto: StudentDTO) =>  {
      alert('Student je uspešno izmenjen!');
      // this.router.navigate(['/students']);
    });
  }

  goBack() {
    this.location.back();
  }

}
