import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
    name: 'customMaxLenght',
    standalone: true,
    pure: true,
})
export class CustomMaxLenghtPipe implements PipeTransform {
    transform(value: string, maxLenght: number = 20): string {
        return value.length > maxLenght ? value.slice(0, maxLenght) + '...': value
    }
}