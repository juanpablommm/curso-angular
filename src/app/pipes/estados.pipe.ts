import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'estados'
})
export class EstadosPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    /*ak es donde nostros aplicariamos la logica que queremos para tranforma nuestro dado,
    * podiendonos apoyar de el argumento de tipo varargs para en base a argumentos que nos pasen
    * aplicar una logica, o otra*/
    console.log('hello, soy el pipe')
    return (value === 1) ? 'APROVADA' : 'RECHAZADA';
  }

}
