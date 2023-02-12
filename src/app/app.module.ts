import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/main/home/home.component';
import { BouquetsComponent } from './components/main/bouquets/bouquets.component';
import { FlowersApieceComponent } from './components/main/flowers-apiece/flowers-apiece.component';
import { AccessoriesComponent } from './components/main/accessories/accessories.component';
import { GiftsComponent } from './components/main/gifts/gifts.component';
import { BonusesComponent } from './components/main/bonuses/bonuses.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './services/api/data.service';
import { CurrentComponent } from './components/main/bouquets/current/current/current.component';
import { BasketComponent } from './components/header/basket/basket.component';



const flowersPages: Routes = [
  { path: '', component: MainComponent },
  { path: 'home', component: HomeComponent },
  { path: 'bouquets/:id', component: CurrentComponent },
  { path: 'bouquets', component: BouquetsComponent },
  { path: 'flowers-apiece', component: FlowersApieceComponent },
  { path: 'accessories', component: AccessoriesComponent },
  { path: 'gifts', component: GiftsComponent },
  { path: 'bonuses', component: BonusesComponent },
  { path: 'basket', component: BasketComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    HomeComponent,
    BouquetsComponent,
    FlowersApieceComponent,
    AccessoriesComponent,
    GiftsComponent,
    BonusesComponent,
    CarouselComponent,
    CurrentComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(flowersPages),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      DataService, { dataEncapsulation: false }
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
