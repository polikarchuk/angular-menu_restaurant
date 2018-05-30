import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './dishes/dishes.component';
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {SearchPipe} from "./search.pipe";
import { HomePageComponent } from './home-page/home-page.component';
import { BasketPageComponent} from './basket-page/basket-page.component';
import {RouterModule} from "@angular/router";
import { CategoryesComponent } from './categoryes/categoryes.component';
import {CategoryesService} from "./categoryes.service";
import {BasketService} from "./basket.service";

const routes = [

    {path: 'home', component:HomePageComponent},
    {path: 'basket', component:BasketPageComponent},
    {path: ':category', component:HomePageComponent},
    {path: '**', redirectTo: 'home'}
];


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
      SearchPipe,
      HomePageComponent,
      BasketPageComponent,
      CategoryesComponent
  ],
  imports: [
    BrowserModule,
      HttpModule,
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot(routes)
  ],
  providers: [CategoryesService,BasketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
