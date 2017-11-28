import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { filter, switchMap } from 'rxjs/operators';

import 'rxjs/add/operator/switchMap';

import { Product } from '../../shared/product';
import { ProductService } from '../../core/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.paramMap
    .pipe(
      switchMap((param: ParamMap) =>
        this.productService.getProduct(Number(param.get('id'))))
    )
    .subscribe(
      data => {
        this.product = data;
      }
    );
  }
}
