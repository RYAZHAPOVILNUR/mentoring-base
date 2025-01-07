import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'phoneWithOnlyNumbers',
    standalone: true
})
export class PhoneWithOnlyNumbers implements PipeTransform {
    transform(text: string | undefined | null): string {
        if (text){ 
            return text.replace(/[^+\d]/g, '');
        }
        return ''
    }
}