import {Http} from '@angular/http'
import { HttpClient } from "@angular/common/http";
import {Inject, Injectable} from "@angular/core";
import {map} from "rxjs/internal/operators";



@Injectable()
export class CategoryesService{
    constructor(@Inject(HttpClient) private http: HttpClient){}

    getCategories(){
        return this.http.get("assets/API/ListCategotyes.json").pipe(
            map(response => response),

        )
    }



}

