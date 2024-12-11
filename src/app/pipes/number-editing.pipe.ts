import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'numberEditing',
    standalone: true
})

export class NumberEditingPipe implements PipeTransform {
    transform(phone: string): string {
       return phone.replace(/[^\d]/g, '')
    }

}