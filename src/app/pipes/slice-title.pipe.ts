import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customSliceTitle',
  standalone: true,
  pure: true,
})
export class CustomSliceTitlePipe implements PipeTransform {
  transform(title: string): string {
    return title.length >= 20 ? `${title.slice(0, 20)}...` : title;
  }
}
