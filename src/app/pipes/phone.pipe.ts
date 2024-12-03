import { Pipe, PipeTransform } from "@angular/core";

export @Pipe ({
    name: 'phonePipe',
    standalone: true,
    pure: true,
})
class PhonePipe implements PipeTransform {
  transform(text: string): string {
    return text.replace(/[^+\d]+/g,'');
  }
}