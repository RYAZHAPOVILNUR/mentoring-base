import { SlicePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "CustomSlicePipe",
    standalone: true,
})

export class CustomSlicePipe implements PipeTransform {
    transform(text: string): string {
        if (text.length > 20) { return text.slice(0, 17) + '...' }
        else return text
    }


}