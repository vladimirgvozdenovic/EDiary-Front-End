import { Teacher } from './Teacher';
import { Student } from './Student';
import { TeacherTeachSubjectToSchoolClass } from './TeacherTeachSubjectToSchoolClass';

export class SchoolClass {
    Id: string;
    SchoolYear: number;
    ClassNumber: number;
    CalendarYear: number;
    HeadTeacher: Teacher;
    Students: Student[];
    TeacherTeachSubjectToSchoolClasses: TeacherTeachSubjectToSchoolClass[];
}
