import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'titleLimitPipe',
  standalone: true,
})
export class TitleLimitPipe implements PipeTransform {
  transform(text: string): string {
    if (text.length > 20 ) {
      return text.slice (0,17) + '...';
    } else 
    return text
  }
}
 