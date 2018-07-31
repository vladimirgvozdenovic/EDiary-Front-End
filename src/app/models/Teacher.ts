import { User } from './User';
import { SchoolClass } from './SchoolClass';
import { TeacherTeachSubject } from './TeacherTeachSubject';

export class Teacher extends User {
    FirstName: string;
    LastName: string;
    Email: string;

    HeadClass: SchoolClass;
    TeacherTeachSubjects: TeacherTeachSubject[];
}
