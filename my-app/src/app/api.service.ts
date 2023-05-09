import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, map, retry, catchError, throwError } from 'rxjs';
import { Order } from './order';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private _http: HttpClient) {}
  getCarts(): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/cart', requestOptions).pipe(
      map((res) => JSON.parse(res) as Array<Product>),
      retry(3),
      catchError(this.handleError)
    );
  }
  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }

  postOrder(aOrder: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'ContentType',
      'application/json;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http
      .post<any>('/orders', JSON.stringify(aOrder), requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as Order),
        retry(3),
        catchError(this.handleError)
      );
  }

  saveCart(carts: any) {
    let cartJson = JSON.stringify(carts);
    sessionStorage.setItem('cart', cartJson);
  }
}
