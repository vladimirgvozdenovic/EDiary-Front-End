import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

import { Parent } from '../models/Parent';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  private parentsUrl = environment.apiBaseUrl + '/parents/';
  parents: Parent[];
  parent: Parent;

  constructor(private httpClient: HttpClient,
              private authService: AuthService) { }

  getParent(id: String): Observable<Parent> {
    return this.httpClient
      .get<Parent>(this.parentsUrl + id, this.authService.getOptionsWithToken())
      .pipe(
        catchError(this.handleError<Parent>('getParent')));
  }

  getParents(): Observable<Parent[]> {
      return this.httpClient
      .get<Parent[]>(this.parentsUrl, this.authService.getOptionsWithToken())
      .pipe(
        catchError(this.handleError<Parent[]>('getParents'))
      );
  }

  addParent(parent: Parent): Observable<Parent> {
    return this.httpClient
      .post<Parent>(this.parentsUrl, parent, this.authService.getOptionsWithToken())
      .pipe(
        catchError(this.handleError<Parent>('addParent')));
  }

  updateParent(parent: Parent): Observable<Parent> {
    return this.httpClient
      .put<Parent>(this.parentsUrl + parent.UserId, parent, this.authService.getOptionsWithToken())
      .pipe(
        catchError(this.handleError<Parent>('updateParent')));
  }

  deleteParent(parent: Parent): Observable<Parent> {
    return this.httpClient
     .delete<Parent>(this.parentsUrl + parent.UserId, this.authService.getOptionsWithToken())
     .pipe(
       catchError(this.handleError('deleteParent', parent)));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
