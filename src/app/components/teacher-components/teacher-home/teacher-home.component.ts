import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../../models/Teacher';
import { AuthService } from '../../../services/auth.service';
import { StudentService } from '../../../services/student.service';
import { User } from '../../../models/User';
import { TeacherService } from '../../../services/teacher.service';
import { TeacherTeachSubject } from '../../../models/TeacherTeachSubject';
import { TeacherTeachSubjectToSchoolClass } from '../../../models/TeacherTeachSubjectToSchoolClass';
import { SchoolClass } from '../../../models/SchoolClass';
import { TeacherTeachSubjectToSchoolClassToStudent } from '../../../models/TeacherTeachSubjectToSchoolClassToStudent';
import { TtstsctStudentService } from '../../../services/ttstsct-student.service';

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrls: ['./teacher-home.component.css']
})
export class TeacherHomeComponent implements OnInit {
  user: User;
  teacher: Teacher;
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
    private ttstsctStudentService: TtstsctStudentService
  ) { }

  ngOnInit() {
    this.user = this.authService.user;

    console.log(this.user);
    console.log('from teacher-home.component.ts');
    this.teacherService.getTeacher(this.user.UserId).subscribe( teacher => {
        this.teacher = teacher;
        console.log(this.teacher);
        console.log('From subscribe teacher-home.component.ts');
        this.teacherTeachSubjects = teacher.TeacherTeachSubjects;
        console.log(this.teacherTeachSubjects);
        console.log('From subscribe teacher-home.component.ts');
    });
    console.log(this.teacher);
    console.log('from teacher-home.component.ts');
  }

  onChangeFirst(event): void {  // event will give you full breif of action
    const newVal: number = event.target.value;
    console.log(newVal);
    this.teacherTeachSubject = this.teacherTeachSubjects.find(x => x.Subject.Id == newVal);
    console.log(this.teacherTeachSubject);
    this.teacherTeachSubjectToSchoolClasses = this.teacherTeachSubject.TeacherTeachSubjectToSchoolClasses;
    console.log(this.teacherTeachSubjectToSchoolClasses);
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
}
