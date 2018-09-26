import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {
  transform(value: any): any {
    return new Intl.NumberFormat().format(value);
  }
}
