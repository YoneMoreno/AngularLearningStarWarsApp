import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortCharacters'
})
export class SortCharactersPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
