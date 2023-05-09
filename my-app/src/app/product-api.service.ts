import {  HttpClient, HttpErrorResponse,  HttpHeaders,} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError, map } from 'rxjs';
import { Product } from './Product';


@Injectable({
  providedIn: 'root',
})
export class ProductAPIService {

  public hideLoadMoreBtn =false;

  constructor(private _http: HttpClient) {}

  getProducts(n: number): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('http://localhost:3002/products', requestOptions).pipe(
      map((res) => JSON.parse(res) as Array<Product>),
      retry(3),
      catchError(this.handleError)
    );
  }
  handleError(error: HttpErrorResponse) {
    console.log('handleError', error);
    return throwError(() => new Error(error.message));
  }
  getProductCategories(type: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('http://localhost:3002/products', requestOptions).pipe(
      map((res) => {
        let products = JSON.parse(res) as Array<Product>;
        let productsCategory = products.filter((val) => val.type === type);
        return productsCategory;
      }),
      retry(3),
      catchError(this.handleError)
    );
  }
  getProduct(id: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>("http://localhost:3002/products/"+ id, requestOptions).pipe(
      map((res) => JSON.parse(res) as Product),
      retry(3),
      catchError(this.handleError)
    );
  }
}
