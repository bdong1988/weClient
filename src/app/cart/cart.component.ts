import { Component, OnInit } from '@angular/core';
import { Commodity } from '../shared/commodity';
import { ShoppingCartService } from '../core/shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  commodities: Commodity[];
  constructor(private shoppingCartService: ShoppingCartService) {
    console.log('cart construct');
  }

  ngOnInit() {
    console.log('cart oninit');
    this.commodities = this.shoppingCartService.getCommodities();
  }

  getTotalAmount(): number {
    return this.shoppingCartService.getTotalAmount();
  }

}
