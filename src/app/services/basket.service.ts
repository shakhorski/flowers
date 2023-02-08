import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
counterGoodsInBasket: number = 0;
statusUpdated = new EventEmitter()

  constructor() { }

  getBasket() {
    return this.counterGoodsInBasket;
  }
  plusGoodInBasket() {
    this.counterGoodsInBasket++;
    this.statusUpdated.emit(this.counterGoodsInBasket);
  }
  minusGoodInBasket() {
    this.counterGoodsInBasket--;
    this.statusUpdated.emit(this.counterGoodsInBasket);
  }
}
