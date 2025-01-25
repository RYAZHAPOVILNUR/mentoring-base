import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limiteSymbols',
  standalone: true,
  pure: true,
})
export class LimiteSymbolsPipe implements PipeTransform {
  transform(text: string, maxLength: number = 20): string {
    if (!text) return '';

    if (text.length <= maxLength) {
      return text;
    }

    return text.slice(0, maxLength) + '...';
  }
}
