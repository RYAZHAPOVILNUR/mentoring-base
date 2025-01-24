import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'setDate',
  standalone: true
})
export class SetDatePipe implements PipeTransform {

  constructor(private datePipe: DatePipe) {}

  transform(value: any, args?: any): any {
    
    return this.datePipe.transform(value, 'medium');
  }
}
