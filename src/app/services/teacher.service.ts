import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

import { Teacher } from '../models/Teacher';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class TeacherService {
  private teachersUrl = environment.apiBaseUrl + '/teachers/';

  constructor(private httpClient: HttpClient,
              private authService: AuthService) { }

  getTeacher(id: string): Observable<Teacher> {
    return this.httpClient
      .get<Teacher>(this.teachersUrl + id, this.authService.getOptionsWithToken())
      .pipe(
        catchError(this.handleError<Teacher>('getTeacher')));
  }

  getTeachers(): Observable<Teacher[]> {
    // if (this.authService.user.role === 'admins') {
      return this.httpClient
      .get<Teacher[]>(this.teachersUrl, this.authService.getOptionsWithToken())
      .pipe(
        catchError(this.handleError<Teacher[]>('getTeachers'))
      );
    /*} else {
      return null;
    }*/
  }

  addTeacher(teacher: Teacher): Observable<Teacher> {
    return this.httpClient
      .post<Teacher>(this.teachersUrl, teacher, this.authService.getOptionsWithToken())
      .pipe(
        catchError(this.handleError<Teacher>('addTeacher')));
  }

  updateTeacher(teacher: Teacher): Observable<Teacher> {
    return this.httpClient
      .put<Teacher>(this.teachersUrl + teacher.UserId, teacher, this.authService.getOptionsWithToken())
      .pipe(
        catchError(this.handleError<Teacher>('updateTeacher')));
  }

  deleteTeacher(teacher: Teacher): Observable<Teacher> {
    return this.httpClient
     .delete<Teacher>(this.teachersUrl + teacher.UserId, this.authService.getOptionsWithToken())
     .pipe(
       catchError(this.handleError('deleteTeacher', teacher)));
  }

  searchTeachers(term: string): Observable<Teacher[]> {
    if (!term.trim()) {
        return this.getTeachers();
    }

    return this.httpClient
      .get<Teacher[]>(`${this.teachersUrl}?naziv=${term}`, this.authService.getOptionsWithToken())
      .pipe(
        catchError(this.handleError<Teacher[]>('searchTeachers', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
