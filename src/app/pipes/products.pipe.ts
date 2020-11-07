import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class ProductsPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '') return value;
    const resultado = [];
    for (const post of value) {
      if (post.id.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultado.push(post);
      };
    };
    return resultado;
  }

}
