import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonePipe',
  standalone: true,
  pure: true,
})
export class CustomNumberPfonePipe implements PipeTransform {
  transform(phoneNumber: string): string {
    if (!phoneNumber) return '';
    return phoneNumber.replace(/[^0-9]/g, '');
  }
}
