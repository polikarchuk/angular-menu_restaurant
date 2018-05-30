import {Component, Inject, OnInit} from '@angular/core';
import {UserService} from "../dishes.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent  {
    dish = [];
    serchStr ="";

    constructor (private userServise: UserService, @Inject(ActivatedRoute) private activated: ActivatedRoute){
        activated.params.subscribe(data=>{
            let category = data.category;
            this.init(category)
        });
        this.init();
    }

    init(category?: string){
        this.userServise.getUsers().subscribe((dish:any) =>{
        if(!category){
            this.dish = dish;
        }
            else this.dish = dish.filter(x=>x.category == category)
        });
    }



}
