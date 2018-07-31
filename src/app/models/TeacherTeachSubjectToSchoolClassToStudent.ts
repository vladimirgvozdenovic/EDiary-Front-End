import { FinaleGrade } from './FinaleGrade';
import { TeacherTeachSubjectToSchoolClass } from './TeacherTeachSubjectToSchoolClass';
import { Student } from './Student';
import { TeacherTeachSubjectToSchoolClassToStudentAtSemester } from './TeacherTeachSubjectToSchoolClassToStudentAtSemester';

export class TeacherTeachSubjectToSchoolClassToStudent {
    Id: number;

    FinaleGrade: FinaleGrade;

    TeacherTeachSubjectToSchoolClass: TeacherTeachSubjectToSchoolClass;
    Student: Student;

    TeacherTeachSubjectToSchoolClassToStudentAtSemesters: TeacherTeachSubjectToSchoolClassToStudentAtSemester[];
}
