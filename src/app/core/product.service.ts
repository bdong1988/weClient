import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import { Product } from '../shared/product';
import { ServerData } from '../shared/serverData';
import { tap } from 'rxjs/operators/tap';
import { map } from 'rxjs/operators/map';

@Injectable()
export class ProductService {
  readonly productUrl: string = '/mobile/api/products';
  private productCache: Product[];

  constructor(private http: HttpClient) { }
  getAllProduct(page: number, pageSize: number): Observable<Product[]> {

    const params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());

    const mockUrl = '/assets/mocks/products.json';
    // return this.http.get<ProductsData>(this.productUrl, {params})
    //     .map(data => {
    //       this.productCache = data.data;
    //       return this.productCache;
    //     });

    return this.http.get<Product[]>(mockUrl)
      .map(data => {
        this.productCache = data;
        return this.productCache;
      });
  }

  getProduct(id: number): Observable<Product> {
    if (this.productCache) {
      const product = this.productCache.filter(item => item.ID === id);
      return from(product);
    } else {
      const params = new HttpParams()
        .set('ID', id.toString());
      return this.http.get<ProductData>(this.productUrl, { params })
        .map(data => data.data);
    }
  }
}

class ProductsData extends ServerData {
  data: Product[];
}

class ProductData extends ServerData {
  data: Product;
}
