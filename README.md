# CursoAngular

# Clase 4 -Directivas

Las Directivas son una caracteristica, un feature pilar de angular, que basicamente nos permite
extender una funcionalidad del html, de un elmento html.

![image](https://github.com/juanpablommm/curso-angular/assets/62717509/e2d59893-080f-4884-92a0-4483004cdfa7)

Sabemos que los compoentes son el elmento mas pequeño en el desarrollo front moderno.
Ahora para el tema de las directivas, tenemos tres tipos.
* **Directivas de tipo Component** que basicamente como su nombre lo dicen no son mas que los mismos componentes, que creemos,
dado que si lo analizamos bien **un componente no es mas que un elmento html con funcionalidad extendida, muestro
algo en el html, y le agrego una funcionalidad que tengamos en el archivo typeScript, un metodo que calcule la fecha altual, 
un metodo que realice una suma o x logica que yo quiera,** ahora esta directivas de componente son solo los componentes que tienen
una template html asociada

-----------------------------------------------------------------------------
* **Directiva de tipo atributo** estas modifican la apariencia o comportamiento de **un elemento del DOM, utlizandoce como atrinutos 
de un elemento html** esto incluye que una directiva de atributo puede modifcar tambien un compoente, porque recordemos que un compoente
lo establcemos con una etiqueta html con el nombre que le hallamos dado a ese compoente.
![image](https://github.com/juanpablommm/curso-angular/assets/62717509/61e9c12b-2308-40a9-a23f-e9d9071c1890)
De este tipo de riectivas tambien tenemos bascimante 3 subtipos que serian:

* **ngClass** que basicmante como mencionamos es un atributo que se le da a un elmento html, pero con la funcionalidad de que estaremos
dandole un nombre de una clase html al elemento, esto basandono a una condicion que establescamos, devolviendo el nombre de la case con 
la que queremos marcar ese elmento html.

* **ngStyle** esta driectiva de atributo es basicamente lo mismo que la anterior, pero para aplicar estilos css, es como si tuvieramos un 
style inline en un elmento html pero de manera dinamica., podiendo trar por ejemplo el valor de un colo a establecer desde un atributo definido 
en un compoente o un base a una condicion

* **ngModel** esta directiva de atributo basicamente lo que hara es que nos permitira anexar una varible que tengamos por ejemplo
en un compoente a un input de un formulario para poder aplicar un control sobre ellos, por ejemplo para controlar que lo que este escribiendo
dentro de un input se almacene dentro de la variable que le definamos con el ngModel.

-----------------------------------------------------------------------------

* **Directivas de tipo estructurales** son aquellas que alteran la estructura de DOM, y comienzan con el prefijo *, mientras que las 
directivas de atributo alteran la apariencia o comportamineto sobre un atributo html, las **directivas extructuras puden alterar la extructira
del DOM, pueden agregar mas elementos al DOM, o quitarlos, o modificarlos, pueden ocultarlos, renderizalos depues de un tiempo, etc** de igual manera
estas se ponen como si fuera un atributo del elmento html.
![image](https://github.com/juanpablommm/curso-angular/assets/62717509/ff8aa7ab-a491-4577-95dd-57b5c8fbe29e)

* ***ngIf** esta directiva se coloca como atributo de un elmento hml, y en base a ellea lo que se hara es evaluar un condicional,
que si se cumple, pues nos permitira renderizar el elmento html que contiene esta directiva.

* ***ngFor** bascimante es como llevar un bucle for a el html, haremos un recorrido sobre alguna array o lista, al estilo forech, si exiten elementos
pues se dibjura la eiqueta por cada elmento que tengamos en la lista, en donde podrmoes ir accediendo a los atributos de cada elmento de la lista
apoyandonos de la interpolacion de angular.

* ***ngTemplateOutlet** este basicmaente nos permitira renderizar un bloque de html que tengamos dentro de una etiqueta `<ng-template>` con un ide espcieal que le asignemos
para identificarlo mediante `#name` en el momento que yo lo llame, mediante una etiqueta `<ngContainer *ngTemplaOutlet=""ideDeLaTemplate">`, de esta manera esta la ngTemplate
pero no se renderizara hasta que la mandemos a llamar.

Podemos mezclar esas direcitvas sengun las necesidades que tenemos, como por ejemplo aplicar un *ngIf para validar si exite algun atributo que tengamos en el copoent
validando una condicionar si se aplica listo, por ejemplo podmoes recorrer una lista con *ngFor
