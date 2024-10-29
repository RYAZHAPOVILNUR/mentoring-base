import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customNoDash',
  standalone: true,
})
export class noDashPipe implements PipeTransform {
  transform(val: string): string {
    if (val !== undefined && val !== null) {
      // here we just remove the commas from value
      return val.toString().replace(/-/g, '');
    } else {
      return '';
    }
  }
}
