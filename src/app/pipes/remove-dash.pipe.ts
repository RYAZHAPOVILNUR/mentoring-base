import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customRemoveDash',
  standalone: true,
})
export class CustomRemoveDashPipe implements PipeTransform {
  transform(value: string): string {
    return value ? value.replace(/[-.())]/g, '') : value;
  }
}
