import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { catchError, Observable, tap, throwError, map, of, BehaviorSubject } from 'rxjs';

@Injectable({
  // root injector, which means this service is global
  providedIn: 'root'
})
  
export class ProductService {
  private url = '/api/products'
  private products!: Product[];

  private selectedProductSource = new BehaviorSubject<Product | null>(null);
  selectedProductChanges$ = this.selectedProductSource.asObservable();

  constructor(private http: HttpClient) { }
  // getProducts(): Observable<Product[]>{
  //   return this.http.get<Product[]>(this.url)
  //     .pipe(
  //       tap(data=>console.log("Data: "+JSON.stringify(data))),
  //       catchError(err=>this.handleError(err)))
  // }

  changeSelectedProduct(selectedProduct: Product | null): void {
    this.selectedProductSource.next(selectedProduct);
  }

  getProducts(): Observable<Product[]> {
    if (this.products) {
      return of(this.products);
    }
    return this.http.get<Product[]>(this.url)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        tap(data => this.products = data),
        catchError(this.handleError)
      );
  }

  // Return an initialized product
  newProduct(): Product {
    return {
      id: 0,
      productName: '',
      productCode: 'New',
      description: '',
      starRating: 0
    };
  }

  createProduct(product: Product): Observable<Product> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // Product Id must be null for the Web API to assign an Id
    const newProduct = { ...product, id: null };
    return this.http.post<Product>(this.url, newProduct, { headers })
      .pipe(
        tap(data => console.log('createProduct: ' + JSON.stringify(data))),
        tap(data => {
          this.products.push(data);
        }),
        catchError(this.handleError)
      );
  }

  deleteProduct(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.url}/${id}`;
    return this.http.delete<Product>(url, { headers })
      .pipe(
        tap(data => console.log('deleteProduct: ' + id)),
        tap(data => {
          const foundIndex = this.products.findIndex(item => item.id === id);
          if (foundIndex > -1) {
            this.products.splice(foundIndex, 1);
          }
        }),
        catchError(this.handleError)
      );
  }

  updateProduct(product: Product): Observable<Product> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.url}/${product.id}`;
    return this.http.put<Product>(url, product, { headers })
      .pipe(
        tap(() => console.log('updateProduct: ' + product.id)),
        // Update the item in the list
        // This is required because the selected product that was edited
        // was a copy of the item from the array.
        tap(() => {
          const foundIndex = this.products.findIndex(item => item.id === product.id);
          if (foundIndex > -1) {
            this.products[foundIndex] = product;
          }
        }),
        // Return the product on an update
        map(() => product),
        catchError(this.handleError)
      );
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
