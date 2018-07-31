import { TeacherTeachSubject } from './TeacherTeachSubject';
import { SchoolClass } from './SchoolClass';
import { Lecture } from './Lecture';
import { TeacherTeachSubjectToSchoolClassToStudent } from './TeacherTeachSubjectToSchoolClassToStudent';

export class TeacherTeachSubjectToSchoolClass {
    Id: number;
    TeacherTeachSubject: TeacherTeachSubject;
    SchoolClass: SchoolClass;

    Lectures: Lecture[];
    TeacherTeachSubjectToSchoolClassToStudents: TeacherTeachSubjectToSchoolClassToStudent[];
}
