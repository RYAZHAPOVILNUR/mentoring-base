import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'trucante',
    standalone: true,
    pure: true,
})
export class TrucantePipe implements PipeTransform {
    transform(value: string | undefined, limit: number = 20): string | undefined{
        if (!value) {
            return '';
        }
        return value.length > limit ? value.substring(0, limit) + '...' : value;
    }
}