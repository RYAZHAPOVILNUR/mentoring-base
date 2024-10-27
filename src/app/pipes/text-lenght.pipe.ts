import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'textLenght',
    standalone: true,
})
export class TextLenghtPipe implements PipeTransform{
    transform(text: string) {
        return text.length > 20 ? text.slice(0, 20) + '…' : text;
    }

}