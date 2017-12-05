import { Component, OnInit } from '@angular/core';
import { Commodity } from '../../shared/commodity';
import { ShoppingCartService } from '../../core/shopping-cart.service';

@Component({
  selector: 'app-settle',
  templateUrl: './settle.component.html',
  styleUrls: ['./settle.component.scss']
})
export class SettleComponent implements OnInit {
  commodities : Commodity[];

  constructor(private shoppingCartService : ShoppingCartService) { }

  ngOnInit() {
    this.commodities = this.shoppingCartService.getCommodities();
  }

  getTotalAmount(): number {
    return this.shoppingCartService.getTotalAmount();
  }

  onClickOrder(): void {
  }

}
