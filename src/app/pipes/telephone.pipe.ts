import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'customTelephone',
    standalone: true
})

export class CustomTelephonePipe implements PipeTransform{
    transform(text: string): string {
        return text.replace(/\W|_/g, '-')
    }
}