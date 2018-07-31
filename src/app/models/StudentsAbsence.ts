import { Student } from './Student';
import { Lecture } from './Lecture';

export class StudentsAbsence {
    Id: number;
    Justified: boolean;
    Student: Student;
    Lecture: Lecture;
}
