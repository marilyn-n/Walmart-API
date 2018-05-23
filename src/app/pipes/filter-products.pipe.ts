import { Pipe, PipeTransform } from '@angular/core';
import { WalmartApiService } from '../services/walmart.api.service';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(items: Object[], name: string, search: string): any[] {
    if (!items) {
      return [];
    }
    if (!search) {
        return items;
    }
        const expresion = new RegExp(search, 'i');
        return items.filter(item  => expresion.test(items['name']));
      }
    }
