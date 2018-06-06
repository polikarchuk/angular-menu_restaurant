import {Http} from '@angular/http'
import { HttpClient } from "@angular/common/http";
import {Inject, Injectable} from "@angular/core";
import {map} from "rxjs/internal/operators";
import {Observable, of} from "rxjs/index";



@Injectable()
export class DishesService{
    dishes=[];
    constructor(@Inject(HttpClient) private http: HttpClient){}
    getDishes(){
        if(this.dishes.length==0)
            return this.http.get("assets/API/menu.json").pipe(
            map((response:any) => this.dishes=response)
            )
        else {
            return of(this.dishes)
        }
    }




}
