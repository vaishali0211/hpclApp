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
  Change_User_password(params) {
    return this.http.post<any>(this.baseUrl+'/update_user_password',params,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  };
  Payment_detail(params) {
    return this.http.post<any>(this.baseUrl+'/add_payment_detail',params,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  };
  Add_Payment(params) {
    return this.http.post<any>(this.baseUrl+'/add_payment',params,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  };
  Get_Payment_detail_by_payment(params) {
    return this.http.post<any>(this.baseUrl+'/get_payment_detail_by_payment',params,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  };
  Get_Payment_Entry(params){
    return this.http.post<any>(this.baseUrl+'/get_payment',params,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  };
  Get_Delivery_boy_stocks(params){
    return this.http.post<any>(this.baseUrl+'/get_deliveryboy_stocks',params,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  };
  Add_Order(params){
    return this.http.post<any>(this.baseUrl+'/add_order',params,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  };

  Get_Load_Stocks(params){
    return this.http.post<any>(this.baseUrl+'/get_load_stocks',params,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  };
  Get_Deliveries(params){
    return this.http.post<any>(this.baseUrl+'/get_deliveries',params,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  };
  Get_Orders(params){
    return this.http.post<any>(this.baseUrl+'/get_orders',params,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  };
  Get_stocks(params){
    return this.http.post<any>(this.baseUrl+'/get_stocks',params,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  };
 

  }