import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'siNo'
})
export class SiNoPipe implements PipeTransform{
    transform(vuela: boolean):string{
        
        return (vuela) ? 'si' : 'no';
    }
}