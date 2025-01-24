import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitText',
  standalone: true
})
export class LimitTextPipe implements PipeTransform {

  transform(text: string): string {
    const length = 20
    const trimmedString = text.length > length ? text.substring(0, length - 3) + "..." : text;
    return trimmedString
  }

}
