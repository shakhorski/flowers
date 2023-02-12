import { IBouquet } from 'src/app/interfaces/bouquet';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
counterGoodsInBasket: number = 0;
statusUpdated = new EventEmitter()
basketGoods:any = []


  constructor() { }

  getBasket() {
    return this.counterGoodsInBasket;
  }

  getGoodsInBasket() {
    return this.basketGoods;
  }

  plusGoodInBasket(bouquet: IBouquet):void {
    this.counterGoodsInBasket++;
    this.statusUpdated.emit(this.counterGoodsInBasket);
    this.basketGoods.push(bouquet);
    console.log(this.basketGoods)
  }
  minusGoodInBasket(bouquet: any):void {
    this.counterGoodsInBasket--;
    this.statusUpdated.emit(this.counterGoodsInBasket);
    this.basketGoods.splice(this.basketGoods.indexOf(bouquet), 1);
  }
}
