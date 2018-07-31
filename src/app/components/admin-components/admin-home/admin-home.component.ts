import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../../models/Teacher';
import { AuthService } from '../../../services/auth.service';
import { StudentService } from '../../../services/student.service';
import { User } from '../../../models/User';
import { Admin } from '../../../models/Admin';
import { Student } from '../../../models/Student';
import { TeacherService } from '../../../services/teacher.service';
import { TeacherTeachSubject } from '../../../models/TeacherTeachSubject';
import { TeacherTeachSubjectToSchoolClass } from '../../../models/TeacherTeachSubjectToSchoolClass';
import { SchoolClass } from '../../../models/SchoolClass';
import { TeacherTeachSubjectToSchoolClassToStudent } from '../../../models/TeacherTeachSubjectToSchoolClassToStudent';
import { TtstsctStudentService } from '../../../services/ttstsct-student.service';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  private adminsUrl = environment.apiBaseUrl + '/admins/';
  user: User;
  teacher: Teacher;
  students: Student[];
  admin: Admin;
  teacherTeachSubjects: TeacherTeachSubject[];
  teacherTeachSubject: TeacherTeachSubject;
  teacherTeachSubjectToSchoolClasses: TeacherTeachSubjectToSchoolClass[];
  teacherTeachSubjectToSchoolClass: TeacherTeachSubjectToSchoolClass;
  schoolClass: SchoolClass;
  teacherTeachSubjectToSchoolClassToStudents: TeacherTeachSubjectToSchoolClassToStudent[];

  constructor(
    private authService: AuthService,
    private teacherService: TeacherService,
    private studentService: StudentService,
    private ttstsctStudentService: TtstsctStudentService,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.user = this.authService.user;

    console.log(this.user);
    console.log('from admin-home.component.ts');
    this.getAdmin(this.user.UserId).subscribe( admin => {
        this.admin = admin;
        console.log(this.admin);
        console.log('From subscribe admin-home.component.ts');
    });
  }

  getAdmin(id: String): Observable<Admin> {
    return this.httpClient
      .get<Admin>(this.adminsUrl + id, this.authService.getOptionsWithToken());
  }

  onChangeFirst(): void {  // event will give you full breif of action
    /*const newVal: number = event.target.value;
    console.log(newVal);
    this.teacherTeachSubject = this.teacherTeachSubjects.find(x => x.Subject.Id == newVal);
    console.log(this.teacherTeachSubject);
    this.teacherTeachSubjectToSchoolClasses = this.teacherTeachSubject.TeacherTeachSubjectToSchoolClasses;
    console.log(this.teacherTeachSubjectToSchoolClasses);*/
    this.studentService.getStudents().subscribe(students => { this.students = students; this.studentService.students = this.students; });
  }

  onChangeSecond(event): void {  // event will give you full breif of action
    const newVal: string = event.target.value;
    console.log(newVal);
    this.teacherTeachSubjectToSchoolClass = this.teacherTeachSubjectToSchoolClasses.find(x => x.SchoolClass.Id == newVal);
    console.log(this.teacherTeachSubjectToSchoolClass);
    this.studentService.students = this.teacherTeachSubjectToSchoolClass.SchoolClass.Students;
    console.log(this.studentService.students);
    console.log('studenti from onChangeSecond() body');
    this.teacherTeachSubjectToSchoolClassToStudents = this.teacherTeachSubjectToSchoolClass.TeacherTeachSubjectToSchoolClassToStudents;
    this.ttstsctStudentService.teacherTeachSubjectToSchoolClassToStudents = this.teacherTeachSubjectToSchoolClassToStudents;
    console.log(this.teacherTeachSubjectToSchoolClassToStudents);
  }

  onChangeThird(event): void {  // event will give you full breif of action
    const newVal: number = event.target.value;
    console.log(newVal);
  }

  onChangeFourth(event): void {  // event will give you full breif of action
    const newVal: number = event.target.value;
    console.log(newVal);
  }

  onChangeFifth(event): void {  // event will give you full breif of action
    const newVal: number = event.target.value;
    console.log(newVal);
  }
}
