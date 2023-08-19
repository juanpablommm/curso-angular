# CursoAngular

# Clase 5 - PIpes


Los pipes son una caracteristica que angular nos provee, cuya finalidad es poder transformar los datos que vallamos 
a usar, basicamente es como una funcion que nosotros le vamos a pasar al html para transformar los datos
que se estan mostrando alusuario, por ejemplo si necestiamos tranformar un string a uppercase, pero la repuesta que nos da
un servidor no nos envia el dato hacie, no estair bien que la logica del compoente lo tubiera que modificar ese dato, solo para mostrarlo
al usuario, pues estariamos agregando logica inecesaria a la clase del compoente, mientras que **un pipe nos pemitira
trasnformar esos datos a por ejemplo upperCase sin alterar el atributo o variable, solo sera anivel visual para el cliente, la
trnaformacion solo se hara en el html, no afectara al atributo del compoente en la clase**

Para aplicar un pipe en el un templade, lo hacemos por medio de la interpolacion de angular y tulizando al pip operator,
llamndo al pipe que queremos aplicar.
```angular2html
{{name .toString()| uppercase}}
```

Esto es sumante util, como por ejemplo si recivimos de un servidor un formato de fecha muy extension, y solo queremos mostrar
mes y año, lo podemos hacer con el papi **date** y psandole uno de los muchos formatos de fecha que este pipe ya nos porvee.

# Crear nuestros propios Pipes

Para crear un piepe, tneemos que ejecutar el siguiente comando `ng generate pipe` y la ruta donde lo vamos a crear
por ejemplo en una carpeta asociada a un compoenente.
Este nos creara una clase typeScrip como la siguiente.
```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estados'
})
export class EstadosPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
```

* En donde podemos observa un decorador que lo define como un pipe, con un metadato
name, que es el que nos permitira usarlo desde una template en la que estemos empleando
interpolacion con algun tipo de dato y queremos transformarlo.

* Y observamos una funcion  transform, que recibe dos argumentos un value, y un argumento varible
el value seria el valor de la varible que estara recibiendo cuando le apliquemos el pipe y el argumento
de tipo varargs seran los argumentos que nostros desemos pdir para ampliar su funcionalidad.
como por ejemplo los argumentos del tipo de formato que queremos mostrar, en donde se lo psamos al pipe.

* El uso del pipe es sumante importante, si por ejemplo un servidor nos llegase a devolver un valor bolean
o numerico que para ser mostrado al cliente no se podria visualizar de esa forma, dado que represente por ejemplo
el estado de una transacion ya sea APROVADA, o RECHAZADA, en esos casos podria usar un pipe

El pipe que creemos lo podremos llamar de la misma forma que emos echo, pasandole paraemtros en caso
de que los tengamos configurados para la logica del pipe `{ nameVariable | namePipe}`

# **Nota Impotante:**
Sabemos en que la interpoalacion podemos ejecutar codigo js, y bien podriamos hacer el trabajo de el pipe, mediante una funcion que 
este definida en el compoente, pero primero esot causara que ensusiemos el codigo del compoente con funcionalidades
que muy probablemente no son de alta cohesion para la case y en seundo lugar **esto no se deb hacer por que causara errores
que puden dañar la aplicacion colapsarla, dado que si llamos unfiones en un interpolacion que estemos haciendo para asignarle
valores a un elmento html, eso causara que se este ejcutando muchas vaces esa funcion, dado que como es metodologia de una SPA,
la aplicacion angular estara escuchando a que courran cualquier cambio en uno de los compotnes para el renderizado
por lo cual si se aplicara un cambio minimio en uno de los compoentes donde aplicos esto, se ejecutara la funcion, y estaremos
mandadola allmar muchas veces por cada renderizada que se haga del compoente, ocasionando lentitud**

Cosa que por el contrario no courre con los pipes, dado que para eso es que angular mos dispoene de estos.
