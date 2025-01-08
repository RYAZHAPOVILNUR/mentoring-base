import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'booleanTrans',
    standalone: true
})

export class BoolaenTransform implements PipeTransform {
    transform(value: boolean): string {
        return value ? 'ДА' : 'НЕТ';
    }
}