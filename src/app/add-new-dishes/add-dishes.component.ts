import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {DishesService} from "../dishes.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-add-dishes',
  templateUrl: './add-dishes.component.html',
  styleUrls: ['./add-dishes.component.css']
})
export class AddDishesComponent implements OnInit {
  title = 'app';
  categoryesControl: FormGroup;

  constructor(private fb: FormBuilder, private dishesServise: DishesService , private  sanitazer: DomSanitizer) { }
    aDishes = false;


    addDishes (){
        this.aDishes = true;
        this.dishesServise.dishes.push(this.categoryesControl.value);


    }
    addPhotoDishe(event){
        var file = event.target.files[0];
        var url = URL.createObjectURL(file);
        this.categoryesControl.get('preview').setValue(this.sanitazer.bypassSecurityTrustUrl(url));
    }



  ngOnInit() {
    this.categoryesControl = this.fb.group({
        category:["Перша страва"],
        name:["Борщ"],
        price:["20"],
        preview:[]

    })
      this.categoryesControl.valueChanges.subscribe((value)=> console.log(value))
  }

}
