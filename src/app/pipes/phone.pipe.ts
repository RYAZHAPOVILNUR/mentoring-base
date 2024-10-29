import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
  standalone: true
})
export class PhonePipe implements PipeTransform {

  transform(text: string): string {
    return text.replace(/[^\w\s]|_/g, '').slice(0, 10);
  }

}
