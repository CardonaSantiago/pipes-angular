import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'vuela'
})

export class VuelaPipe implements PipeTransform{
    
    transform(valor: boolean = true):string{
        /*
        if(valor){
            return 'vuela';
        }
        else{
            return 'no vuela';
        }
        */
        return( valor)
        ? 'vuela'
        : 'no vuela'
    }

}