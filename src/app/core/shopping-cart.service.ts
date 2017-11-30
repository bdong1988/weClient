import { Injectable } from '@angular/core';
import { Commodity } from '../shared/commodity';

@Injectable()
export class ShoppingCartService {
  commodities: Commodity[] = [];
  constructor() { }

  addToCart(
    id: number,
    title: string,
    description: string,
    img: string,
    price: number,
    count: number): void {
    const comodity: Commodity = {id, title, description, img, price, count};
    this.commodities.push(comodity);
  }

  getCommodities(): Commodity[] {
    return this.commodities;
  }

  clearCart(): void {
    this.commodities = [];
  }

}


