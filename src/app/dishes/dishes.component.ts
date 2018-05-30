import {Component, Inject, Input} from '@angular/core';
import {BasketService} from "../basket.service";


@Component({
  selector: 'app-dish',
  templateUrl: './dishes.component.html',
  styleUrls:['./dishes.component.css']
})
export  class UserComponent {
    @Input() user;


    isMarke = false;
    deleteBuy = false;
    @Input() isBasketDish = false;



    addBuy(){
        this.isMarke = true;
        this.deleteBuy = true;
        this.basketServise.BasketList.push(this.user);
        console.log(this.user.price)
    }

    remoteBuy(){
        this.deleteBuy = false;
        this.isMarke = false;
        this.basketServise.BasketList = this.basketServise.BasketList.filter(x=>x!=this.user);

    }

    constructor ( @Inject(BasketService) private basketServise: BasketService){

    }


}