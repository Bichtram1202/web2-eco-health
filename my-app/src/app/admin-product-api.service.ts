import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Product } from './admin-products/product';
import { Promtion } from './admin-promotion/promption';

@Injectable({
  providedIn: 'root',
})
export class AdminProductApiService {
  [x: string]: any;
  constructor(private _http: HttpClient) {}
  getProducts(): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/products', requestOptions).pipe(
      map((res) => JSON.parse(res) as Array<Product>),
      retry(3),
      catchError(this.handleError)
    );
  }
  getProduct(id: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responeType: 'text',
    };
    return this._http.get<any>('/product/' + id, requestOptions).pipe(
      map((res) => res as Product),
      retry(3),
      catchError(this.handleError)
    );
  }
  putProduct(aProduct: any, id: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responeType: 'text',
    };
    return this._http
      .put<any>('/product', JSON.stringify(aProduct), requestOptions)
      .pipe(
        map((res) => res as Product),
        retry(3),
        catchError(this.handleError)
      );
  }
  postProduct(aProduct: any): Observable<any> {
    console.log('aProduct: ', aProduct);
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responeType: 'text',
    };
    return this._http
      .post<any>('/product', JSON.stringify(aProduct), requestOptions)
      .pipe(
        map((res) => res as Product),
        retry(3),
        catchError(this.handleError)
      );
  }
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
  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
}
