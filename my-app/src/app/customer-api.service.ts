import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Customer } from './customer/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerApiService {
  constructor(private _http: HttpClient) {}
  getCustomers(): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/customers', requestOptions).pipe(
      map((res) => JSON.parse(res) as Array<Customer>),
      retry(3),
      catchError(this.handleError)
    );
  }
  getCustomer(id: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responeType: 'text',
    };
    return this._http.get<any>('/customer/' + id, requestOptions).pipe(
      map((res) => res as Customer),
      retry(3),
      catchError(this.handleError)
    );
  }
  putCustomer(aCustomer: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responeType: 'text',
    };
    return this._http
      .put<any>('/customer', JSON.stringify(aCustomer), requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as Customer),
        retry(3),
        catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
}
