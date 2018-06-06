import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './dishes/dishes.component';
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SearchPipe} from "./search.pipe";
import { HomePageComponent } from './home-page/home-page.component';
import { BasketPageComponent} from './basket-page/basket-page.component';
import {RouterModule} from "@angular/router";
import { CategoryesComponent } from './categoryes/categoryes.component';
import {CategoryesService} from "./categoryes.service";
import {BasketService} from "./basket.service";
import { AddDishesComponent } from './add-new-dishes/add-dishes.component';

const routes = [

    {path: 'home', component:HomePageComponent},
    {path: 'basket', component:BasketPageComponent},
    {path: 'addNewDishe', component:AddDishesComponent},
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
      CategoryesComponent,
      AddDishesComponent,

  ],
  imports: [
    BrowserModule,
      HttpModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(routes)
  ],
  providers: [CategoryesService,BasketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
