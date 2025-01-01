import { Pipe, PipeDecorator, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deleteLine',
  standalone: true,
})
export class DeleteLinePipe implements PipeTransform {
  transform(number: string): string {
    return number.replaceAll('-', '').trim();
  }
}
