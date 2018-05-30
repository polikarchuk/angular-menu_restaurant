import {Http} from '@angular/http'
import { HttpClient } from "@angular/common/http";
import {Inject, Injectable} from "@angular/core";
import {map} from "rxjs/internal/operators";



@Injectable()
export class UserService{
    constructor(@Inject(HttpClient) private http: HttpClient){}
    getUsers(){
        return this.http.get("assets/API/menu.json").pipe(
            map(response => response),

        )
    }




}
