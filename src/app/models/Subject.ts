import { SchoolYearEnum } from './SchoolYearEnum';
import { TeacherTeachSubject } from './TeacherTeachSubject';
import { Lesson } from './Lesson';


export class Subject {
    Id: number;
    Name: string;
    SchoolYear: SchoolYearEnum;
    WeeklyLectureQuantity: number;

    TeacherTeachSubjects: TeacherTeachSubject[];
    Lessons: Lesson[];
}
