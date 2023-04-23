import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, throwError } from 'rxjs';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Biscotti } from './Biscotti';

@Injectable({
  providedIn: 'root'
})
export class BiscottiAPIService {
  constructor(private _http: HttpClient) { }
  getBiscottis():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8");
    const requestOptions:Object={
      headers:headers,
      responseType:"text",
    };
    return this._http.get<any>("/biscottis",requestOptions).pipe(
      map(res=>JSON.parse(res) as Array<Biscotti>),
    retry(3),
    catchError(this.handleError))
 }
  handleError(error:HttpErrorResponse){
    console.log('handleError',error);
    return throwError(()=> new Error(error.message))
  }
}
