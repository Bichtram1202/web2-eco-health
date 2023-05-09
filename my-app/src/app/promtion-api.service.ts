import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';

import { Promtion } from './admin-promotion/promption';

@Injectable({
  providedIn: 'root',
})
export class PromtionApiService {
  constructor(private _http: HttpClient) {}
  getPromotions(): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/promotions', requestOptions).pipe(
      map((res) => JSON.parse(res) as Array<Promtion>),
      retry(3),
      catchError(this.handleError)
    );
  }
  putPromotion(promotion: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responeseType: 'text',
    };
    return this._http.put<any>('/promotions', promotion, requestOptions).pipe(
      map((res) => res as Array<Promtion>),
      retry(3),
      catchError(this.handleError)
    );
  }
  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
}
