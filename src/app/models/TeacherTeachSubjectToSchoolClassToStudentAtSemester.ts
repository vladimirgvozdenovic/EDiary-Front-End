import { FinaleSemesterGrade } from './FinaleSemesterGrade';
import { TeacherTeachSubjectToSchoolClassToStudent } from './TeacherTeachSubjectToSchoolClassToStudent';
import { Semester } from './Semester';
import { SemesterGrade } from './SemesterGrade';

export class TeacherTeachSubjectToSchoolClassToStudentAtSemester {
    Id: number;

    FinaleSemesterGrade: FinaleSemesterGrade;

    TeacherTeachSubjectToSchoolClassToStudent: TeacherTeachSubjectToSchoolClassToStudent;
    Semester: Semester;

    SemesterGrades: SemesterGrade[];
}
