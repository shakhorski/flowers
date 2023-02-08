import { IBouquet } from 'src/app/interfaces/bouquet';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BouquetsService {

  constructor(private httpClient: HttpClient) { }

private bouquetsUrl= 'api/bouquetsAutors';

public getBouquets (): Observable<IBouquet[]> {
  return this.httpClient.get<IBouquet[]>(this.bouquetsUrl)
}
public getCurrentBouquet(bouquetId: number): Observable<IBouquet> {
  return this.httpClient.get<IBouquet>(this.bouquetsUrl + '/' + bouquetId)
}

}
