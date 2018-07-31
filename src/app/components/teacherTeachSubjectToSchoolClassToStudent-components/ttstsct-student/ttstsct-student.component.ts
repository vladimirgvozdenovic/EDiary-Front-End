import { Component, OnInit, Input } from '@angular/core';
import { TeacherTeachSubjectToSchoolClassToStudent } from '../../../models/TeacherTeachSubjectToSchoolClassToStudent';

@Component({
  selector: 'app-ttstsct-student',
  templateUrl: './ttstsct-student.component.html',
  styleUrls: ['./ttstsct-student.component.css']
})
export class TtstsctStudentComponent implements OnInit {
  @Input() teacherTeachSubjectToSchoolClassToStudent: TeacherTeachSubjectToSchoolClassToStudent;

  constructor() { }

  ngOnInit() {
    console.log(this.teacherTeachSubjectToSchoolClassToStudent);
    console.log('teacherTeachSubjectToSchoolClassToStudent from ttstsct-student.component.ts');
  }

}
