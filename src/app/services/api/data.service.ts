import { IBouquet } from 'src/app/interfaces/bouquet';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  createDb() {
    const bouquetsAutors: IBouquet[] = [
      {
        id: 1,
        url: 'https://savvaflowers.pl/images/virtuemart/product/resized/imgonline-com-ua-Resize-GpNneECWPSo_0x325.jpg',
        name: 'Snow',
        price: 256
      },
      {
        id: 2,
        url: 'https://savvaflowers.pl/images/virtuemart/product/resized/imgonline-com-ua-Resize-LwaTJhq4ptht4e7M_0x325.jpg',
        name: 'Bouquet Accent',
        price: 256
      },
      {
        id: 3,
        url: 'https://savvaflowers.pl/images/virtuemart/product/resized/imgonline-com-ua-Resize-cRUetbudKsbpk_0x325.jpg',
        name: 'Bouquet Anna',
        price: 256
      },
      {
        id: 4,
        url: 'https://savvaflowers.pl/images/virtuemart/product/resized/imgonline-com-ua-Resize-dHfnUQEVotI35o8_0x325.jpg',
        name: 'Bouquet Autumn',
        price: 256
      },
      {
        id: 5,
        url: 'https://savvaflowers.pl/images/virtuemart/product/resized/imgonline-com-ua-Resize-dRIXNEPFfb_0x325.jpg',
        name: 'Bouquet Bordo',
        price: 256
      },
      {
        id: 6,
        url: 'https://savvaflowers.pl/images/virtuemart/product/resized/imgonline-com-ua-Resize-ilQGS57vjTA_0x325.jpg',
        name: 'Bouquet Bu',
        price: 256
      },
      {
        id: 7,
        url: 'https://savvaflowers.pl/images/virtuemart/product/resized/imgonline-com-ua-Resize-jwkVjbYead5JRdp_0x325.jpg',
        name: 'Bouquet Bueno',
        price: 256
      },
      {
        id: 8,
        url: 'https://savvaflowers.pl/images/virtuemart/product/resized/imgonline-com-ua-Resize-kbAheeO0AwsFkH%20(1)_0x325.jpg',
        name: 'Bouquet Buttercup',
        price: 256
      },
      {
        id: 9,
        url: 'https://savvaflowers.pl/images/virtuemart/product/resized/imgonline-com-ua-Resize-n3h1k2HPFiu_0x325.jpg',
        name: 'Bouquet Classic',
        price: 256
      },
      {
        id: 10,
        url: 'https://savvaflowers.pl/images/virtuemart/product/resized/imgonline-com-ua-Resize-vaQk8fQKtgHu_0x325.jpg',
        name: 'Bouquet Dream',
        price: 256
      },
      {
        id: 11,
        url: 'https://savvaflowers.pl/images/virtuemart/product/resized/imgonline-com-ua-Resize-wGoDq8iNqH_0x325.jpg',
        name: 'Bouquet Fil',
        price: 256
      },
      {
        id: 12,
        url: 'https://savvaflowers.pl/images/virtuemart/product/resized/photo_2022-10-24_10-49-05_0x325.jpg',
        name: 'Bouquet Fit',
        price: 256
      },
      {
        id: 13,
        url: 'https://savvaflowers.pl/images/virtuemart/product/resized/photo_2022-10-24_11-21-42_0x325.jpg',
        name: 'Bouquet Heavenly',
        price: 256
      },
      {
        id: 14,
        url: 'https://savvaflowers.pl/images/virtuemart/product/resized/photo_2022-10-24_14-27-20_0x325.jpg',
        name: 'Bouquet Is Delicate',
        price: 256
      },
      {
        id: 15,
        url: 'https://savvaflowers.pl/images/virtuemart/product/resized/photo_2022-10-27_13-36-41_0x325.jpg',
        name: 'Bouquet ivvi',
        price: 256
      },
      {
        id: 16,
        url: 'https://savvaflowers.pl/images/virtuemart/product/resized/photo_2022-10-27_15-57-52_0x325.jpg',
        name: 'Bouquet Livia',
        price: 256
      },
    ]
    return {bouquetsAutors};
  }
  constructor() { }
}
