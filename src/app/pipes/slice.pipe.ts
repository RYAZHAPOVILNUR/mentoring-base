import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'customSlice',
    standalone: true
})

export class CustomSlicePipe implements PipeTransform{
    transform(text: string): string {
        if (text.length > 20) {
        return text.slice(0, 20) + '...'
        } else {
        return text
        }
    }
}