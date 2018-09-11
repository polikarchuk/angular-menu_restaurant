import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {CategoryesService} from "../categoryes.service";
import {Router} from "@angular/router";


@Component({
    selector: 'app-categories',
    templateUrl: './categoryes.component.html',
    styleUrls: ['./categoryes.component.css']
})
export class CategoryesComponent implements OnInit {
    listCategoryes = [

    ];
    filterCategories(u){
        this.router.navigate([u.category]);
    }

    constructor (private categoryesServise: CategoryesService, @Inject(Router) private router: Router){

    }

    ngOnInit(){
        this.categoryesServise.getCategories().subscribe((listCategoryes:any) =>{
            this.listCategoryes = listCategoryes
        });
    }



}