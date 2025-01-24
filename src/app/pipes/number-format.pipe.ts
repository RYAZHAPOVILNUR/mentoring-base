import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat',
  standalone: true
})
export class NumberFormatPipe implements PipeTransform {


  transform(value: string): string {

    function removeForbiddenCharacters (str: string) {
      let forbiddenChars = ['/', '?', '&','-','.','"']
      
      for (let char of forbiddenChars){
          str = str.split(char).join('');
      }
      return str
      }
    return removeForbiddenCharacters(value)
  }

}
