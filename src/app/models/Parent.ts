import { User } from './User';
import { Student} from './Student';

export class Parent extends User {
    FirstName: string;
    LastName: string;
    Email: string;
    PhoneNumber: string;
    Students: Student[];
}
