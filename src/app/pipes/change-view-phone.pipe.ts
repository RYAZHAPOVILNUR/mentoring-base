import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeViewPhone',
  standalone: true
})
export class ChangeViewPhonePipe implements PipeTransform {
  transform(text: string): string {
    return text.split('').map(char =>
      (char >= '0' && char <= '9') ? char : (char === 'x' ? ' ' : '')).join('');
  }
}
