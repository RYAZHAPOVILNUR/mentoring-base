import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber',
  standalone: true,
})
export class PhoneNumber implements PipeTransform {
  transform(value: string) {
    return value.replace(/[^\d]/g, '');
  }
}
