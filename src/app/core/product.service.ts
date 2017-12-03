import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import { Product } from '../shared/product';
import { tap } from 'rxjs/operators/tap';

@Injectable()
export class ProductService {
  readonly productUrl: string = 'http://localhost:8080/mobile/api/products';
  private productCache: Product[];

  constructor(private http: HttpClient) { }
  getAllProduct(page: number, pageSize: number): Observable<Product[]> {
    const url = this.productUrl + '?page=' + page + '&pageSize=' + pageSize;
    const mockUrl = '/assets/mocks/products.json';
    return this.http.get<Product[]>(mockUrl)
      .pipe(
        tap(data => this.productCache = data)
      );
  }

  getProduct(id: number): Observable<Product> {
    if (this.productCache) {
      const product = this.productCache.filter(item => item.ID === id);
      return from(product);
    }
  }
}
