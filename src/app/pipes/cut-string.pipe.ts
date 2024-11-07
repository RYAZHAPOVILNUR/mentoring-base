import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  standalone: true,
  name: "cutString"
})
export class CutStringPipe implements PipeTransform {
    transform(str: string): string {
      return  str.length < 20 ? str : str.slice(0, 20) + "...";
    }
}
