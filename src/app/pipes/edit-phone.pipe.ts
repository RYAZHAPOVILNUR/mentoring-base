import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
    name: 'editPhone',
    standalone: true,
})
export class EditPhonePipe implements PipeTransform {
    transform(phone: string) {
    return phone.replace(/\D/g, '')}
}