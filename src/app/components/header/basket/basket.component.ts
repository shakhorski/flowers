import { IBouquet } from 'src/app/interfaces/bouquet';
import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit  {
goodsInBasket: IBouquet[]

constructor(public basketService: BasketService) {}



ngOnInit(): void {
   this.goodsInBasket =  this.basketService.getGoodsInBasket()
  }



}
