import { Component } from '@angular/core';
import {DishesService} from "./dishes.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DishesService]
})
export class AppComponent {

}
