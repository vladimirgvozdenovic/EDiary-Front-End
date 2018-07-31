import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

import { TeacherTeachSubjectToSchoolClassToStudent } from '../models/TeacherTeachSubjectToSchoolClassToStudent';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class TtstsctStudentService {
  private teacherTeachSubjectToSchoolClassToStudentsUrl = environment.apiBaseUrl + '/teacherTeachSubjectToSchoolClassToStudents/';
  teacherTeachSubjectToSchoolClassToStudents: TeacherTeachSubjectToSchoolClassToStudent[];
  teacherTeachSubjectToSchoolClassToStudent: TeacherTeachSubjectToSchoolClassToStudent;

  constructor(private httpClient: HttpClient,
              private authService: AuthService) { }

  getTeacherTeachSubjectToSchoolClassToStudent(id: String): Observable<TeacherTeachSubjectToSchoolClassToStudent> {
    return this.httpClient
      .get<TeacherTeachSubjectToSchoolClassToStudent>(
        this.teacherTeachSubjectToSchoolClassToStudentsUrl + id,
        this.authService.getOptionsWithToken()
        )
      .pipe(
        catchError(this.handleError<TeacherTeachSubjectToSchoolClassToStudent>('getTeacherTeachSubjectToSchoolClassToStudent')));
  }

  getTeacherTeachSubjectToSchoolClassToStudents(): Observable<TeacherTeachSubjectToSchoolClassToStudent[]> {
    // if (this.authService.user.role === 'admins') {
      return this.httpClient
      .get<TeacherTeachSubjectToSchoolClassToStudent[]>(
        this.teacherTeachSubjectToSchoolClassToStudentsUrl,
        this.authService.getOptionsWithToken()
      )
      .pipe(
        catchError(this.handleError<TeacherTeachSubjectToSchoolClassToStudent[]>('getTeacherTeachSubjectToSchoolClassToStudents'))
      );
    /*} else {
      return null;
    }*/
  }

  addTeacherTeachSubjectToSchoolClassToStudent(teacherTeachSubjectToSchoolClassToStudent: TeacherTeachSubjectToSchoolClassToStudent):
   Observable<TeacherTeachSubjectToSchoolClassToStudent> {
    return this.httpClient
      .post<TeacherTeachSubjectToSchoolClassToStudent>(
        this.teacherTeachSubjectToSchoolClassToStudentsUrl,
        teacherTeachSubjectToSchoolClassToStudent, this.authService.getOptionsWithToken()
      )
      .pipe(
        catchError(this.handleError<TeacherTeachSubjectToSchoolClassToStudent>('addTeacherTeachSubjectToSchoolClassToStudent')));
  }

  updateTeacherTeachSubjectToSchoolClassToStudent(teacherTeachSubjectToSchoolClassToStudent: TeacherTeachSubjectToSchoolClassToStudent):
   Observable<TeacherTeachSubjectToSchoolClassToStudent> {
    return this.httpClient
      .put<TeacherTeachSubjectToSchoolClassToStudent>(
        this.teacherTeachSubjectToSchoolClassToStudentsUrl + teacherTeachSubjectToSchoolClassToStudent.Id,
        teacherTeachSubjectToSchoolClassToStudent, this.authService.getOptionsWithToken()
      )
      .pipe(
        catchError(this.handleError<TeacherTeachSubjectToSchoolClassToStudent>('updateTeacherTeachSubjectToSchoolClassToStudent')));
  }

  deleteTeacherTeachSubjectToSchoolClassToStudent(teacherTeachSubjectToSchoolClassToStudent: TeacherTeachSubjectToSchoolClassToStudent):
   Observable<TeacherTeachSubjectToSchoolClassToStudent> {
    return this.httpClient
     .delete<TeacherTeachSubjectToSchoolClassToStudent>(
       this.teacherTeachSubjectToSchoolClassToStudentsUrl + teacherTeachSubjectToSchoolClassToStudent.Id,
       this.authService.getOptionsWithToken()
      )
     .pipe(
       catchError(this.handleError('deleteTeacherTeachSubjectToSchoolClassToStudent', teacherTeachSubjectToSchoolClassToStudent)));
  }

  searchTeacherTeachSubjectToSchoolClassToStudents(term: string): Observable<TeacherTeachSubjectToSchoolClassToStudent[]> {
    if (!term.trim()) {
        return this.getTeacherTeachSubjectToSchoolClassToStudents();
    }

    return this.httpClient
      .get<TeacherTeachSubjectToSchoolClassToStudent[]>(
        `${this.teacherTeachSubjectToSchoolClassToStudentsUrl}by-firstOrLastName/${term}`,
        this.authService.getOptionsWithToken()
      )
      .pipe(
        tap(_ => console.log(`Nadjeni teacherTeachSubjectToSchoolClassToStudenti sa nazivom "${term}"`)),
        catchError(this.handleError<TeacherTeachSubjectToSchoolClassToStudent[]>('searchTeacherTeachSubjectToSchoolClassToStudents', []))
    );
  }

  searchTeacherTeachSubjectToSchoolClassToStudentsFromList(term: string, teacherTeachSubjectToSchoolClassToStudents:
     TeacherTeachSubjectToSchoolClassToStudent[]): Observable<TeacherTeachSubjectToSchoolClassToStudent[]> {
    if (!term.trim()) {
      console.log(teacherTeachSubjectToSchoolClassToStudents);
      console.log(of(teacherTeachSubjectToSchoolClassToStudents));
      console.log('Nadjeni teacherTeachSubjectToSchoolClassToStudenti sa nazivom "*"');
      return of(teacherTeachSubjectToSchoolClassToStudents);
    }

    return of(teacherTeachSubjectToSchoolClassToStudents.filter(x => x.Student.FirstName.toLowerCase().includes(term.toLowerCase()) ||
                                   x.Student.LastName.toLowerCase().includes(term.toLowerCase())))
      .pipe(
        tap(_ => console.log(`Nadjeni teacherTeachSubjectToSchoolClassToStudenti sa nazivom "${term}"`)),
        catchError(this.handleError<TeacherTeachSubjectToSchoolClassToStudent[]>('searchTeacherTeachSubjectToSchoolClassToStudents', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
