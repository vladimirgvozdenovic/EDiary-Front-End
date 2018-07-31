import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  private authUrl = environment.apiTokenUrl;

  constructor(private httpClient: HttpClient) {
  }

  login(username: string, password: string): Observable<User> {

    const body = new HttpParams()
      .set('grant_type', 'password')
      .set('username', username)
      .set('password', password);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.httpClient.post<User>(this.authUrl, body.toString(), httpOptions )
      .pipe(
        tap(user => {
          this.user = user;
          console.log(user);
        })
      );
  }

  logout() {
    this.user = null;
  }

  getOptionsWithToken() {
    console.log(this.user);
    console.log('from auth.service.ts');
    return {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.user.access_token}`,
        'Content-Type': 'application/json'
      })
    };
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
