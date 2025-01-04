import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "CustomCutPipe",
    standalone: true
})
export class CustomCutPipe implements PipeTransform {
    transform(phone: string): string {
        return phone.replace(/[^\d]/g, '')
    }

}