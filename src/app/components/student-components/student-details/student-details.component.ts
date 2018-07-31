import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../../../models/Student';
import { StudentService } from '../../../services/student.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  @Input() student: Student;
  username: string;

  constructor(private studentService: StudentService, private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.getStudent();
  }

  getStudent(): void {
    const id = this.route.snapshot.paramMap.get('id'); // +this.route.snapshot.paramMap.get('id');  (znak + pretvara string u int)
    console.log(id);
    console.log('Id from student-details.component');
    this.studentService.getStudent(id).subscribe(student => {
      this.student = student;
      console.log(this.student);
      console.log('student from student-details.component');
      this.username = this.student.FirstName.toLowerCase() + '.' + this.student.LastName.toLowerCase();
    });
  }

  goBack(): void {
    this.location.back();
  }

}
