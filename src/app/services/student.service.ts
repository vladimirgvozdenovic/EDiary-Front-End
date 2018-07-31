import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

import { Student } from '../models/Student';
import { StudentDTO } from '../models/StudentDTO';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  private studentsUrl = environment.apiBaseUrl + '/students/';
  students: Student[];
  student: Student;

  constructor(private httpClient: HttpClient,
              private authService: AuthService) { }

  getStudent(id: String): Observable<Student> {
    return this.httpClient
      .get<Student>(this.studentsUrl + id, this.authService.getOptionsWithToken())
      .pipe(
        catchError(this.handleError<Student>('getStudent')));
  }

  getStudents(): Observable<Student[]> {
    // if (this.authService.user.role === 'admins') {
      return this.httpClient
      .get<Student[]>(this.studentsUrl, this.authService.getOptionsWithToken())
      .pipe(
        catchError(this.handleError<Student[]>('getStudents'))
      );
    /*} else {
      return null;
    }*/
  }

  addStudent(student: StudentDTO): Observable<StudentDTO> {
    return this.httpClient
      .post<StudentDTO>(this.studentsUrl, student, this.authService.getOptionsWithToken())
      .pipe(
        catchError(this.handleError<StudentDTO>('addStudent')));
  }

  updateStudent(student: StudentDTO): Observable<StudentDTO> {
    return this.httpClient
      .put<StudentDTO>(this.studentsUrl + student.UserId, student, this.authService.getOptionsWithToken())
      .pipe(
        catchError(this.handleError<StudentDTO>('updateStudent')));
  }

  deleteStudent(student: Student): Observable<Student> {
    return this.httpClient
     .delete<Student>(this.studentsUrl + student.UserId, this.authService.getOptionsWithToken())
     .pipe(
       catchError(this.handleError('deleteStudent', student)));
  }

  searchStudents(term: string): Observable<Student[]> {
    if (!term.trim()) {
        return this.getStudents();
    }

    return this.httpClient
      .get<Student[]>(`${this.studentsUrl}by-firstOrLastName/${term}`, this.authService.getOptionsWithToken())
      .pipe(
        tap(_ => console.log(`Nadjeni studenti sa nazivom "${term}"`)),
        catchError(this.handleError<Student[]>('searchStudents', []))
    );
  }

  searchStudentsFromList(term: string, students: Student[]): Observable<Student[]> {
    if (!term.trim()) {
      console.log(students);
      console.log(of(students));
      console.log('Nadjeni studenti sa nazivom "*"');
      return of(students);
    }

    return of(students.filter(x => x.FirstName.toLowerCase().includes(term.toLowerCase()) ||
                                   x.LastName.toLowerCase().includes(term.toLowerCase())))
      .pipe(
        tap(_ => console.log(`Nadjeni studenti sa nazivom "${term}"`)),
        catchError(this.handleError<Student[]>('searchStudents', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
