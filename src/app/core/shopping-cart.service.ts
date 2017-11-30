import { Injectable } from '@angular/core';
import { Commodity } from '../shared/commodity';

@Injectable()
export class ShoppingCartService {
  commodities: Commodity[] = [
    {
      id: 1,
      title: 'iphonex',
      description: '史上最NB IPhone, 支持脸部识别',
      img: './assets/img/product.jpg',
      price: 8888,
      count: 1
    },
    {
      id: 2,
      title: 'iphonex',
      description: '史上最NB IPhone, 支持脸部识别',
      img: './assets/img/product.jpg',
      price: 8888,
      count: 2
    },
    {
      id: 3,
      title: 'iphonex',
      description: '史上最NB IPhone, 支持脸部识别',
      img: './assets/img/product.jpg',
      price: 8888,
      count: 3
    },
    {
      id: 4,
      title: 'iphonex',
      description: '史上最NB IPhone, 支持脸部识别',
      img: './assets/img/product.jpg',
      price: 8888,
      count: 3
    },
    {
      id: 5,
      title: 'iphonex',
      description: '史上最NB IPhone, 支持脸部识别',
      img: './assets/img/product.jpg',
      price: 8888,
      count: 3
    },
    {
      id: 6,
      title: 'iphonex',
      description: '史上最NB IPhone, 支持脸部识别',
      img: './assets/img/product.jpg',
      price: 8888,
      count: 3
    },
  ];
  constructor() { }

  addToCart(
    id: number,
    title: string,
    description: string,
    img: string,
    price: number,
    count: number): void {
    const comodity: Commodity = { id, title, description, img, price, count };
    this.commodities.push(comodity);
  }

  getCommodities(): Commodity[] {
    return this.commodities;
  }

  clearCart(): void {
    this.commodities = [];
  }

}


