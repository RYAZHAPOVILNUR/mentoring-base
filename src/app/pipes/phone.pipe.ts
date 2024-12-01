import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
  standalone: true,
  pure: true,
})
export class PhonePipe implements PipeTransform {
  transform(text: string): string {
    return text.replace(/[^+\d]+/g, '');
  }
}
