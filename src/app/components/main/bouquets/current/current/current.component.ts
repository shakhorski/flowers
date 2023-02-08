import { IBouquet } from 'src/app/interfaces/bouquet';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BouquetsService } from 'src/app/services/bouquets.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnInit {
  currentBouquet: IBouquet;
constructor (private route: ActivatedRoute, private bouqServ: BouquetsService) {

}
  ngOnInit() {
    this.currentBouquet = {
      id: 1,
      name: 'Bouquet 1',
      url: 'https://savvaflowers.pl/images/virtuemart/product/resized/imgonline-com-ua-Resize-GpNneECWPSo_0x325.jpg',
      price: 100,
    }
    let id = this.route.snapshot.paramMap.get('id')
    console.log(id)
    if (id !==null) {
          this.bouqServ.getCurrentBouquet(+id).subscribe(b => this.currentBouquet = b)
    }

    }


  }



