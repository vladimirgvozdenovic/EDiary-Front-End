import { User } from './User';
import { Parent } from './Parent';
import { SchoolClass } from './SchoolClass';
import { TeacherTeachSubjectToSchoolClassToStudent } from './TeacherTeachSubjectToSchoolClassToStudent';
import { StudentsAbsence } from './StudentsAbsence';

export class Student extends User {
    FirstName: string;
    LastName: string;
    Email: string;
    Parent: Parent;
    SchoolClass: SchoolClass;
    SchoolClassId: string;

    TeacherTeachSubjectToSchoolClassToStudents: TeacherTeachSubjectToSchoolClassToStudent[];
    StudentsAbsences: StudentsAbsence[];
}
