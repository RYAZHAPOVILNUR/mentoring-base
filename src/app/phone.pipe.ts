import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'phone',
    standalone: true
  })
  export class PhonePipe implements PipeTransform {
    transform(tel: string): string {
      return tel.replace(/[\s-]/g, '');
    }
  }