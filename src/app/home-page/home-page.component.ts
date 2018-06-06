import {Component, Inject, OnInit} from '@angular/core';
import {DishesService} from "../dishes.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent  {
    dish = [];
    serchStr ="";

    constructor (private dishesServise: DishesService, @Inject(ActivatedRoute) private activated: ActivatedRoute){
        activated.params.subscribe(data=>{
            let category = data.category;
            this.init(category)
        });
        this.init();
    }

    init(category?: string){
        this.dishesServise.getDishes()
        .subscribe((dish:any) =>{
        if(!category){
            this.dish = dish;
        }
            else this.dish = dish.filter(x=>x.category == category)
        });
    }



}
