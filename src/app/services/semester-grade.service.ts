import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

import { SemesterGrade } from '../models/SemesterGrade';
import { SemesterGradeDTO } from '../models/SemesterGradeDTO';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SemesterGradeService {

  private semesterGradesUrl = environment.apiBaseUrl + '/semesterGrades/';
  semesterGrades: SemesterGrade[];
  semesterGrade: SemesterGrade;

  constructor(private httpClient: HttpClient,
              private authService: AuthService) { }

  getSemesterGrade(id: String): Observable<SemesterGrade> {
    return this.httpClient
      .get<SemesterGrade>(this.semesterGradesUrl + id, this.authService.getOptionsWithToken())
      .pipe(
        catchError(this.handleError<SemesterGrade>('getSemesterGrade')));
  }

  getSemesterGrades(): Observable<SemesterGrade[]> {
    // if (this.authService.user.role === 'admins') {
      return this.httpClient
      .get<SemesterGrade[]>(this.semesterGradesUrl, this.authService.getOptionsWithToken())
      .pipe(
        catchError(this.handleError<SemesterGrade[]>('getSemesterGrades'))
      );
    /*} else {
      return null;
    }*/
  }

  addSemesterGrade(semesterGradeDto: SemesterGradeDTO): Observable<SemesterGradeDTO> {
    return this.httpClient
      .post<SemesterGradeDTO>(this.semesterGradesUrl, semesterGradeDto, this.authService.getOptionsWithToken())
      .pipe(
        catchError(this.handleError<SemesterGradeDTO>('addSemesterGradeDTO')));
  }

  updateSemesterGrade(semesterGrade: SemesterGrade): Observable<SemesterGrade> {
    return this.httpClient
      .put<SemesterGrade>(this.semesterGradesUrl + semesterGrade.GradeId, semesterGrade, this.authService.getOptionsWithToken())
      .pipe(
        catchError(this.handleError<SemesterGrade>('updateSemesterGrade')));
  }

  deleteSemesterGrade(semesterGrade: SemesterGrade): Observable<SemesterGrade> {
    return this.httpClient
     .delete<SemesterGrade>(this.semesterGradesUrl + semesterGrade.GradeId, this.authService.getOptionsWithToken())
     .pipe(
       catchError(this.handleError('deleteSemesterGrade', semesterGrade)));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
