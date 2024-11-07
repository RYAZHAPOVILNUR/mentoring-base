import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  standalone: true,
  name: 'FixPhoneNumber'
})
export class FixPhoneNumberPipe implements PipeTransform {
  transform(value: string = ""): string {
    return value.replaceAll("-", "")
  }
}
