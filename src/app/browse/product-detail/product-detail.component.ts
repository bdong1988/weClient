import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { filter, switchMap } from 'rxjs/operators';

import 'rxjs/add/operator/switchMap';

import { Product } from '../../shared/product';
import { ProductService } from '../../core/product.service';
import { ShoppingCartService } from '../../core/shopping-cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService,
    private route: ActivatedRoute
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

  onAddtoCartClick(): void {
    this.shoppingCartService.addToCart(
      this.product.ProductID,
      this.product.Title,
      this.product.Description,
      this.product.Picture1,
      this.product.Price,
      1
    );
  }
}
