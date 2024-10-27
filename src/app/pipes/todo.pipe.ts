import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
  name: 'TodoCut',
  standalone: true,
})

export class TodoCutPipe implements PipeTransform {
  transform(title: string, ellepsis: string = '...'): string {
    if (title.length > 20) {
      return title.slice(0,17) + ellepsis;
    }
    return title
  }
}