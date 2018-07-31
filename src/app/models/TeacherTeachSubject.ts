import { Teacher } from './Teacher';
import { Subject } from './Subject';
import { TeacherTeachSubjectToSchoolClass } from './TeacherTeachSubjectToSchoolClass';

export class TeacherTeachSubject {
    Id: number;
    Teacher: Teacher;
    Subject: Subject;

    TeacherTeachSubjectToSchoolClasses: TeacherTeachSubjectToSchoolClass[];
}
