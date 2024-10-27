import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'removeDashes',
    standalone: true,
    pure: true,
})
export class RemoveDashesPide implements PipeTransform {
    transform(value: string): string {
        return value.replace(/[-+()]/g, '')
    }
}