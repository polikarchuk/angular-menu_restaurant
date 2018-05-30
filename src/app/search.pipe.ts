
import {Pipe,PipeTransform} from "@angular/core";

@Pipe({
    name: "search"

})

export class  SearchPipe implements PipeTransform{
    transform( dish, value){
        return dish.filter(user =>{
            return user.name.includes(value)
        })
    }

}