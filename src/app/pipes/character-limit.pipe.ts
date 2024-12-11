import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'characterLimit',
    standalone: true
})

export class CharacterLimitPipe implements PipeTransform {
    transform(title: string): string {
       return title.substring(0, 20) + '...'
    }

}