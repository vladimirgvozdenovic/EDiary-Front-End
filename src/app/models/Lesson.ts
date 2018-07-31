import { Subject } from './Subject';
import { Lecture } from './Lecture';

export class Lesson {
    Id: number;
    Name: string;

    Subject: Subject;
    Lectures: Lecture[];
}
