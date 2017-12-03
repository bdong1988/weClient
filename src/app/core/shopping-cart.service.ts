import { Injectable } from '@angular/core';
import { Commodity } from '../shared/commodity';
import { forEach } from '@angular/router/src/utils/collection';


@Injectable()
export class ShoppingCartService {
  commodities: Commodity[] = [{
    id: 1,
    title: 'iphonex',
    description: '史上最NB IPhone, 支持脸部识别',
    img: './assets/img/IphoneX_1.jpg',
    price: 8888,
    count: 1,
    selected: true
  }];
  constructor() { }

  addToCart(
    product_id: number,
    product_title: string,
    product_description: string,
    product_img: string,
    product_price: number): void {
    let bFind = false;
    for (let i = 0; i < this.commodities.length; i++) {
      if (this.commodities[i].id === product_id) {
        bFind = true;
        break;
      }
    }

    if (!bFind) {
      const commodity: Commodity = {
        id: product_id,
        title: product_title,
        description: product_description,
        img: product_img,
        price: product_price,
        count: 1,
        selected: true
      };
      this.commodities.push(commodity);
    }

  }

  removeUnselectedCommodity(): void {
    let i = this.commodities.length;
    while (i--) {
      if (this.commodities[i] && this.commodities[i].selected) {
        this.commodities.splice(i, 1);
      }
    }
  }

  getCommodities(): Commodity[] {
    return this.commodities;
  }

  getTotalAmount(): number {
    let amount = 0;
    for (let i = 0; i < this.commodities.length; i++) {
      if (!this.commodities[i].selected) {
        continue;
      }
      amount += this.commodities[i].price * this.commodities[i].count;
    }
    return amount;
  }

  clearCart(): void {
    this.commodities = [];
  }

}


