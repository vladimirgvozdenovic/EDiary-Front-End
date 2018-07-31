import { SemesterEnum } from './SemesterEnum';
import { TeacherTeachSubjectToSchoolClassToStudentAtSemester } from './TeacherTeachSubjectToSchoolClassToStudentAtSemester';

export class Semester {
    Name: SemesterEnum;
    StartDate: Date;
    EndDate: Date;

    TeacherTeachSubjectToSchoolClassToStudentAtSemester: TeacherTeachSubjectToSchoolClassToStudentAtSemester[];
}
