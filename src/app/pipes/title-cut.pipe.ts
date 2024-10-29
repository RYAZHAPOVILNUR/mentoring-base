import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTitleCut',
  standalone: true,
})
export class customTitleCutPipe implements PipeTransform {
  transform(value: string): string {
    return value.length > 20 ? value.slice(0, 20) + '...' : value;
  }
}
