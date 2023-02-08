import { Component } from '@angular/core';
import { IBouquet } from 'src/app/interfaces/bouquet';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
nameSlider1: string = 'Recommended';
nameSlider2: string = 'Bestsellers';
bouquetsRec: IBouquet[] = [
  {
    id: 1,
    url: 'https://savvaflowers.pl/images/virtuemart/product/resized/imgonline-com-ua-Resize-hWoDizID9jT9CBV_0x325.jpg',
    name: 'Bouquet Candy',
    price: 250,
  },
  {
    id: 2,
    url: 'https://savvaflowers.pl/images/virtuemart/product/resized/imgonline-com-ua-Resize-jwkVjbYead5JRdp_0x325.jpg',
    name: 'Bouquet Lightness',
    price: 260,
  },
  {
    id: 3,
    url: 'https://savvaflowers.pl/images/virtuemart/product/resized/photo_2022-11-23_14-30-16%20(2)_0x325.jpg',
    name: 'Bouquet Accent',
    price: 270,
  },
  {
    id: 4,
    url: 'https://savvaflowers.pl/images/virtuemart/product/resized/imgonline-com-ua-Resize-iHEQfbKdJHYdjCl_0x325.jpg',
    name: 'Bouquet Air',
    price: 280
  },
  {
    id: 5,
    url: 'https://savvaflowers.pl/images/virtuemart/product/resized/imgonline-com-ua-Resize-Xg04bi4B7fGtPKg_0x325.jpg',
    name: 'Bouquet Anna',
    price: 290
  },
  {
    id: 6,
    url: 'https://savvaflowers.pl/images/virtuemart/product/resized/imgonline-com-ua-Resize-zLw10Mhxw0_0x325.jpg',
    name: 'Bouquet Blue',
    price: 299,
  },
  {
    id: 7,
    url: 'https://savvaflowers.pl/images/virtuemart/product/resized/imgonline-com-ua-Resize-BOnVlIE8s4ufKEM4_0x325.jpg',
    name: '1 Bouquet of 50 Tulips',
    price: 267
  }
]
bouquetsBest: IBouquet[] = [
  {
    id: 1,
    url: 'https://savvaflowers.pl/images/virtuemart/product/resized/imgonline-com-ua-Resize-hWoDizID9jT9CBV_0x325.jpg',
    name: 'Bouquet Candy',
    price: 250
  },
  {
    id: 2,
    url: 'https://savvaflowers.pl/images/virtuemart/product/resized/imgonline-com-ua-Resize-jwkVjbYead5JRdp_0x325.jpg',
    name: 'Bouquet Lightness',
    price: 260,

  },
  {
    id: 3,
    url: 'https://savvaflowers.pl/images/virtuemart/product/resized/photo_2022-11-23_14-30-16%20(2)_0x325.jpg',
    name: 'Bouquet Accent',
    price: 270,
  },
  {
    id: 4,
    url: 'https://savvaflowers.pl/images/virtuemart/product/resized/imgonline-com-ua-Resize-iHEQfbKdJHYdjCl_0x325.jpg',
    name: 'Bouquet Air',
    price: 280
  },
  {
    id: 5,
    url: 'https://savvaflowers.pl/images/virtuemart/product/resized/imgonline-com-ua-Resize-Xg04bi4B7fGtPKg_0x325.jpg',
    name: 'Bouquet Anna',
    price: 290
  },
  {
    id: 6,
    url: 'https://savvaflowers.pl/images/virtuemart/product/resized/imgonline-com-ua-Resize-zLw10Mhxw0_0x325.jpg',
    name: 'Bouquet Blue',
    price: 299
  },
  {
    id: 7,
    url: 'https://savvaflowers.pl/images/virtuemart/product/resized/imgonline-com-ua-Resize-BOnVlIE8s4ufKEM4_0x325.jpg',
    name: '1 Bouquet of 50 Tulips',
    price: 267
  }
]
}
