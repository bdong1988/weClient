import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commodity } from '../../shared/commodity';
import { ShoppingCartService } from '../../core/shopping-cart.service';
import { OrderReceiver } from '../../shared/orderReceiver';

@Component({
  selector: 'app-settle',
  templateUrl: './settle.component.html',
  styleUrls: ['./settle.component.scss']
})
export class SettleComponent implements OnInit {
  commodities : Commodity[];
  receiver: OrderReceiver;
  constructor(
    private router: Router,
    private shoppingCartService : ShoppingCartService) { }

  ngOnInit() {
    this.commodities = this.shoppingCartService.getCommodities();
    this.receiver = this.shoppingCartService.getOrderReceiver();
  }

  getTotalAmount(): number {
    return this.shoppingCartService.getTotalAmount();
  }

  onClickSelectReceiver(): void {
    this.router.navigate(['/user/receivers']);
  }

  onClickOrder(): void {

  }

}
