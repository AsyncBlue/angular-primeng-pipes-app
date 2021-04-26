import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

    transform( valor: string, enMAyusculas: boolean = true ): string {

        /* if( enMAyusculas ) {
            return valor.toUpperCase();
        } else {
            return valor.toLowerCase();
        } */
        return ( enMAyusculas ) ? valor.toUpperCase() : valor.toLowerCase();

    }

}