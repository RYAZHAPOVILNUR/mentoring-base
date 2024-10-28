import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customChangePhoneFormat',
  standalone: true,
  pure: true,
})
export class CustomChangePhoneFormatPipe implements PipeTransform {
  private regex = /-/gi;

  transform(phone: string): string {
    return phone.replaceAll(this.regex, '');
  }
}
