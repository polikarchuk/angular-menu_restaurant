import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl,Validators, FormGroup} from "@angular/forms";
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
        if(this.categoryesControl.valid) {
            this.aDishes = true;
            this.dishesServise.dishes.push(this.categoryesControl.value);
        }
        else alert('Error')


    }
    addPhotoDishe(event){
        var file = event.target.files[0];
        var url = URL.createObjectURL(file);
        this.categoryesControl.get('preview').setValue(this.sanitazer.bypassSecurityTrustUrl(url));
    }



  ngOnInit() {
    this.categoryesControl = this.fb.group({
        category:["Перша страва",Validators.required],
        name:["Борщ",Validators.required],
        price:["20",Validators.required],
        preview:[Validators.required],



    })
      this.categoryesControl.valueChanges.subscribe((value)=> console.log(value))
  }

}
