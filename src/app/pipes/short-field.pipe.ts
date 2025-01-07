import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'shortField',
    standalone: true
})
export class ShortField implements PipeTransform {
    transform(text: string): string {
        let max_length = 20;
        return text.slice(0, max_length) + '...';
    }
    
}