import {Http} from '@angular/http'
import { HttpClient } from "@angular/common/http";
import {Inject, Injectable} from "@angular/core";
import {map} from "rxjs/internal/operators";



@Injectable()
export class BasketService{
    BasketList = [

    ];
    totalSumPrice(){
        return this.BasketList.reduce((prev, current)=> prev+current.price, 0)
    }




}
