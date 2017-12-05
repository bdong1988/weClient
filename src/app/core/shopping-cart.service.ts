import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Commodity } from '../shared/commodity';
import { OrderReceiver } from '../shared/orderReceiver';


@Injectable()
export class ShoppingCartService {
  commodities: Commodity[] = [];
  receiver: OrderReceiver;
  constructor(private http: HttpClient) { }

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
        this.commodities[i].count++;
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

  orderCart(name: string, addr: string, tel: string){
    const url = '/mobile/api/ordres';
    let order = {
      'ReceiverName': name,
      'ReceiverAddr': addr,
      'ReceiverTel': tel,
      'Orders': []
    };

    for(let i = 0; i < this.commodities.length; i++){
      order.Orders.push({
        'SaleProductID': this.commodities[i].id,
        'Amout': this.commodities[i].count
      })
    }

    return this.http.post(url,order);
  }

  setOrderReceiver(rec: OrderReceiver): void {
    this.receiver = rec;
  }

  getOrderReceiver(): OrderReceiver{
    return this.receiver;
  }

}


