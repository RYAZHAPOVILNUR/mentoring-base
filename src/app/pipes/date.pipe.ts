import { DATE_PIPE_DEFAULT_OPTIONS, DatePipe, DatePipeConfig, formatDate } from "@angular/common";
import { Inject, LOCALE_ID, Optional, Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'customDate',
    standalone: true
})


export class CustomDatePipe implements PipeTransform{

    dateObject: Date = new Date();
    timestamp: number = Date.now();
    dateString: string = '2024-10-27';
    
    // formatDate(
    //     value?: string | number | Date,
    //     format?: string,
    //     locale?: string,
    //     timezone?: string
    //   ): string;
    
        // today: number = Date.now();

        // transform(value: string | number | Date, format?: string, timezone?: string, locale?: string): string;
        // transform(value: null, format?: string, timezone?: string, locale?: string): null;
        // transform(value: string | number | Date, format?: string, timezone?: string, locale?: string): string;
        
        // transform(value: string | number | Date, format?: string, timezone?: string, locale?: string): string {
            // return value
        // }

        transform(text: string): string {
            return text.toUpperCase()
        }
    
      }
            
