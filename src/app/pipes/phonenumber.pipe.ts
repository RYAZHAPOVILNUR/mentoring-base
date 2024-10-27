import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
  name: 'DashCut',
  standalone: true,
})

export class DashesRemoverPipe implements PipeTransform{
  transform(value: string): string {
    return value.replace(/-/g,'');
  }
}
