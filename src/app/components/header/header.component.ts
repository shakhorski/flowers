import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  counterGoodsInBasket: number = 0
  isBasketEmpty: string = 'hidden'
  isOpenMenu: string = 'hidden'
  isOpenMenuHeader: string = 'hidden'

  constructor(private basketService: BasketService) {
    this.basketService.statusUpdated.subscribe(count => this.counterGoodsInBasket = count)
  }

  ngOnInit(): void {
    this.counterGoodsInBasket = this.basketService.getBasket()
  }

  onOpenMenu() {
    (this.isOpenMenu ? this.isOpenMenu = '' : this.isOpenMenu = 'hidden')
  }

}
