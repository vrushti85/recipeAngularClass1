import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], filterVAlue: string): any {
    return items.filter(i => i.name.includes(filterVAlue));
  }

}
