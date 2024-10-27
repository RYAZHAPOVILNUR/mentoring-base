import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'datePipe',
  standalone: true
 })

export class DatePipe implements PipeTransform {
  today: Date = new Date();

  transform(value: string | number | Date = this.today, format: string = 'medium', locale: string = 'en-US'): string {
    const date = new Date(value);

    const options: Intl.DateTimeFormatOptions = this.getFormatOptions(format);
    return new Intl.DateTimeFormat(locale, options).format(date);
  }

  private getFormatOptions(format: string): Intl.DateTimeFormatOptions {
    return format === 'medium' 
      ? { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' }
      : { year: 'numeric', month: 'numeric', day: 'numeric' };
  }
}

