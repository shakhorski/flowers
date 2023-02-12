import { BasketService } from './../../services/basket.service';
import { Component, Input, OnInit } from '@angular/core';
import { IBouquet } from 'src/app/interfaces/bouquet';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})


export class CarouselComponent implements OnInit {

  constructor(private basketService: BasketService) { }

  counterGoodsInBasket: number = 0
  x: number = 0
  isBasketEmpty: string = 'hidden'
  filterImages: IBouquet[]
  transformStye: string = `translateX(${this.x}px)`
  maxWidthWrapper: number

  @Input() name: string
  @Input() bouquets: IBouquet[]

  ngOnInit(): void {
    this.filterImages = this.bouquets
    this.maxWidthWrapper = this.bouquets.length * 370
    this.counterGoodsInBasket = this.basketService.getBasket()
  }

  nextImage() {
    if (this.maxWidthWrapper - 1480 === -this.x) {
      this.x = 0
    } else {
      this.x = this.x - 370
    }
    this.transformStye = `translateX(${this.x}px)`
  }

  prevImage() {
    if (this.x === 0) {
      this.x = -(this.maxWidthWrapper - 1480)
    } else {
      this.x = this.x + 370
    }
    this.transformStye = `translateX(${this.x}px)`
  }

  onChangeCounterBasket() {
    this.counterGoodsInBasket++
    this.basketService.plusGoodInBasket()
  }
}
