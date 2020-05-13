import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { error } from 'util';

@Injectable({
  providedIn: 'root'
})

// export class Rest.ServiceService {
  export class restService {

  baseUrl ='http://27.0.49.226/hpcl/api';

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': '*/*'
    })
  }
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        'Backend returned code: ' + error.status + ' body was: ' + error.message);
    }
    return throwError(
      'Something bad happened; please try again later.'
    );
  }
  
  User_login(params) {
    return this.http.post<any>(this.baseUrl+'/signin',params,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  };

  User_logout(params) {
    return this.http.get<any>(this.baseUrl+'/logout',this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  };

 Get_User_profile(params) {
    return this.http.post<any>(this.baseUrl+'/user_profile',params,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  };
  User_profile_Update(params) {
    return this.http.post<any>(this.baseUrl+'/updat_user_profile_',params,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  };
  change_User_password(params) {
    return this.http.post<any>(this.baseUrl+'/update_user_password',params,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  };
  }