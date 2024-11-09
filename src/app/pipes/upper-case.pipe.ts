import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customUpperCase',
  standalone: true,
})
export class customUpperCasePipe implements PipeTransform {
  transform(text: string): string {
    return text ? text.toUpperCase() : '';
  }
}

// return text.toUpperCase();
