import { BasketService } from 'src/app/services/basket.service';
import { Component, OnInit } from '@angular/core';
import { IBouquet } from 'src/app/interfaces/bouquet';
import { BouquetsService } from 'src/app/services/bouquets.service';

@Component({
  selector: 'app-bouquets',
  templateUrl: './bouquets.component.html',
  styleUrls: ['./bouquets.component.scss']
})
export class BouquetsComponent implements OnInit {

  bouquets: IBouquet[];
  constructor(
    public bouquetsService: BouquetsService,
    public basketService: BasketService) {
    bouquetsService.getBouquets().subscribe(bouquetsAutors => this.bouquets = bouquetsAutors)
  }


  ngOnInit(): void {

  }
  onChangeCounterBasket($event: any, bouquet: IBouquet): void {

    if ($event.target.classList.contains('bg-green-400')) {
      $event.target.classList.remove('bg-green-400');
      $event.target.classList.add('addToBasket');
      $event.target.innerHTML = 'Delete';
      this.basketService.plusGoodInBasket(bouquet)
    } else {
      $event.target.classList.remove('addToBasket')
      $event.target.classList.add('bg-green-400')
      $event.target.innerHTML = 'Add'
      this.basketService.minusGoodInBasket(bouquet)
    }
  }

}


