import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, throwError } from 'rxjs';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ProductTypical} from './typicalproduct';

@Injectable({
  providedIn: 'root'
})
export class TypicalAPIService {
  constructor(private _http: HttpClient) { }
  getProductTypical():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8");
    const requestOptions:Object={
      headers:headers,
      responseType:"text",
    };
    return this._http.get<any>("/producttypical",requestOptions).pipe(
      map(res=>JSON.parse(res) as Array<ProductTypical>),
    retry(3),
    catchError(this.handleError))
 }
  handleError(error:HttpErrorResponse){
    console.log('handleError',error);
    return throwError(()=> new Error(error.message))
  }
}
