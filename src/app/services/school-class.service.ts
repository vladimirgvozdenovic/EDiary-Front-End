import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

import { SchoolClass } from '../models/SchoolClass';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SchoolClassService {
  private schoolClassesUrl = environment.apiBaseUrl + '/schoolClasses/';
  schoolClasses: SchoolClass[];
  schoolClass: SchoolClass;

  constructor(private httpClient: HttpClient,
              private authService: AuthService) { }

  getSchoolClass(id: String): Observable<SchoolClass> {
    return this.httpClient
      .get<SchoolClass>(this.schoolClassesUrl + id, this.authService.getOptionsWithToken())
      .pipe(
        catchError(this.handleError<SchoolClass>('getSchoolClass')));
  }

  getSchoolClasses(): Observable<SchoolClass[]> {
      return this.httpClient
      .get<SchoolClass[]>(this.schoolClassesUrl, this.authService.getOptionsWithToken())
      .pipe(
        catchError(this.handleError<SchoolClass[]>('getSchoolClasses'))
      );
  }

  addSchoolClass(schoolClass: SchoolClass): Observable<SchoolClass> {
    return this.httpClient
      .post<SchoolClass>(this.schoolClassesUrl, schoolClass, this.authService.getOptionsWithToken())
      .pipe(
        catchError(this.handleError<SchoolClass>('addSchoolClass')));
  }

  updateSchoolClass(schoolClass: SchoolClass): Observable<SchoolClass> {
    return this.httpClient
      .put<SchoolClass>(this.schoolClassesUrl + schoolClass.Id, schoolClass, this.authService.getOptionsWithToken())
      .pipe(
        catchError(this.handleError<SchoolClass>('updateSchoolClass')));
  }

  deleteSchoolClass(schoolClass: SchoolClass): Observable<SchoolClass> {
    return this.httpClient
     .delete<SchoolClass>(this.schoolClassesUrl + schoolClass.Id, this.authService.getOptionsWithToken())
     .pipe(
       catchError(this.handleError('deleteSchoolClass', schoolClass)));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
