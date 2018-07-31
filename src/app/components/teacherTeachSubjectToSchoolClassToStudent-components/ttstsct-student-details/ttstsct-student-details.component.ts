import { Component, OnInit, Input } from '@angular/core';
import { TeacherTeachSubjectToSchoolClassToStudent } from '../../../models/TeacherTeachSubjectToSchoolClassToStudent';
import { TtstsctStudentService } from '../../../services/ttstsct-student.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SemesterGradeService } from '../../../services/semester-grade.service';
import { SemesterGrade } from '../../../models/SemesterGrade';
import { SemesterGradeDTO } from '../../../models/SemesterGradeDTO';

@Component({
  selector: 'app-ttstsct-student-details',
  templateUrl: './ttstsct-student-details.component.html',
  styleUrls: ['./ttstsct-student-details.component.css']
})
export class TtstsctStudentDetailsComponent implements OnInit {
  @Input() teacherTeachSubjectToSchoolClassToStudent: TeacherTeachSubjectToSchoolClassToStudent;
  username: string;

  constructor(
    private ttstsctStudentService: TtstsctStudentService,
    private route: ActivatedRoute,
    private location: Location,
    private semesterGradeService: SemesterGradeService
  ) {}

  ngOnInit(): void {
    this.getTeacherTeachSubjectToSchoolClassToStudent();

  }

  getTeacherTeachSubjectToSchoolClassToStudent(): void {
    const id = this.route.snapshot.paramMap.get('id'); // +this.route.snapshot.paramMap.get('id');  (znak + pretvara string u int)
    console.log(id);
    console.log('Id from ttstsct-student-details.component.ts');
    this.ttstsctStudentService.getTeacherTeachSubjectToSchoolClassToStudent(id).subscribe(teacherTeachSubjectToSchoolClassToStudent => {
      this.teacherTeachSubjectToSchoolClassToStudent = teacherTeachSubjectToSchoolClassToStudent;
      console.log(this.teacherTeachSubjectToSchoolClassToStudent);
      console.log('student from ttstsct-student-details.component.ts');
      this.username = this.teacherTeachSubjectToSchoolClassToStudent.Student.FirstName.toLowerCase() + '.'
                    + this.teacherTeachSubjectToSchoolClassToStudent.Student.LastName.toLowerCase();
    });
  }

  goBack(): void {
    this.location.back();
  }

  saveMark(mark: number, semester: number): void {
    console.log(mark, semester);
    console.log('mark and semester from saveMark from ttstsct-student-details.component.ts');
    const semesterGradeDto: SemesterGradeDTO = new SemesterGradeDTO();
    semesterGradeDto.Mark = mark;
    semesterGradeDto.TeacherTeachSubjectToSchoolClassToStudentAtSemesterId =
        this.teacherTeachSubjectToSchoolClassToStudent.TeacherTeachSubjectToSchoolClassToStudentAtSemesters[semester - 1].Id;
    this.semesterGradeService.addSemesterGrade(semesterGradeDto).subscribe();
  }

}
