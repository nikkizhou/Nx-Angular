import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { catchError, Observable, tap, throwError, map } from 'rxjs';

@Injectable({
  // root injector, which means this service is global
  providedIn: 'root'
})
  
export class ProductService {
  private url = '/api/products'

  constructor(private http: HttpClient) { }
  getProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.url)
      .pipe(
        tap(data=>console.log("Data: "+JSON.stringify(data))),
        catchError(err=>this.handleError(err)))
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
