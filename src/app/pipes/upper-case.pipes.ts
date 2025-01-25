import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CustomUpperCase',
  standalone: true,
  pure: true,
})
export class CustomUpperCasePipe implements PipeTransform {
  transform(text: string): string {
    return text.toUpperCase();
  }
}
