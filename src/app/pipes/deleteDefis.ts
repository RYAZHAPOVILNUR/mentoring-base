import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deleteDefis',
  standalone: true,
})
export class DeleteDefisPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    value = value.replace(/-/g, '');
    return value;
  }
}
