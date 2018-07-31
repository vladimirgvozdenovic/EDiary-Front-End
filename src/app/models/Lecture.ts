import { Lesson } from './Lesson';
import { TeacherTeachSubjectToSchoolClass } from './TeacherTeachSubjectToSchoolClass';
import { StudentsAbsence } from './StudentsAbsence';

export class Lecture {
    Id: number;
    Date: Date;
    Topic: String;

    Lesson: Lesson;
    TeacherTeachSubjectToSchoolClass: TeacherTeachSubjectToSchoolClass;

    Absences: StudentsAbsence[];
}
