import {Component, Inject, OnInit} from '@angular/core';
import {BasketService} from "../basket.service";


@Component({
  selector: 'app-setup-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.css']
})
export class BasketPageComponent {
    sumDishes(){
        return this.basketServise.totalSumPrice()
    }
    constructor (@Inject(BasketService) public basketServise: BasketService){

    }


}
