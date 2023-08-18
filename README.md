# CursoAngular

# Clase 3 -Componentes


AL momento que creemos un nuevo compoente en nuestra aplicacion, veremos como se crean nuestros 4 archivos; la template
que seria el archivo html de ese compoente, el archivo de estilos para ese compoente, el archiuvo typeScript del compoente
que vasiamente es el que lo definie, y el que lleva toda la logica de ese componente, y el archivo de pruebas.
Ahora al momento de que este componente es creado veremos como se agreaga al **modulo root** en el Por el momento podemos decir que un **modulo** es el encargado de decirle a angular que existe un compoente
y que lo debe renderizar.

Por otro lado una definicion mas teorica seria que un módulo de Angular, es un conjunto de código dedicado a un ámbito concreto de la aplicación, o una funcionalidad específica y se define mediante una clase decorada con @NgModule.

Toda aplicación de Angular tiene al menos un módulo de Angular, el módulo principal (o root module).

Ahora para saber cual es el componente principal que se esta renderizando en la SPA, pues simplemnte voya al index.html principal de la palicacion
y hay podre observar ala etiqueta con el nombre del compoente, al ser una app recien creada pues observaremos que el compoente
principal que se esta rederizando es el `app-root`
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>CursoAngular</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <!Observamos como el compoente que se esta renderizando es el compoente root de cuando recien se creo la aplicacion>
  <app-root></app-root>
</body>
</html>
```
```typescript
import { Component } from '@angular/core';

/*cada component tiene ensima de la calse esto, a lo cual se le conoce como decorador,
* que esta indicando que es un compoente, es algo similar a las anotaciones de spring.
* un decorador no es mas uqe un conjunto de metadatos que definen un modulo, compoente, service o demas.
* 
* */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curso_angular';
}

```

En un compoente podremos aprecriar un decorador ``@Compoent``, similar a las anotaciones de spring, que no es mas
que un objeto de metadatos que define un componente como en este caso, un modulo o demas...
* El metadato **selector**, es el que definene un nombre o como su mismo nombre lo dice un selector desde el cual
se podra llamar a redenrizar el compoente, tal como lo hace el index.html de la aplicacion con este compoente root.
* El metadato **temaplateUrl** hace referencia al elmento html que se va a renderizar en este componente, el html de este compoente.
* El metadato **styleUrl** al igual que el anterior inicara cual es el archivo de estilo css que le pertecne a este compoente
El metadato templateUrl se puede cambiar por `template`
para manejar el html en el mismo archivo que estamos manjando nuestro compoente, tal como si fuese un style inline en un archivo html 
 
Dentro de la clase del compoente podremos aplicar toda la logica js que necesitemos para nuestra aplicacion,
como por ejemplo definir varibles o atrbituso, metodos, aplicar OOP y demas

* Podremos usar la interpolacion de angular en el template, para aplicar codigo js, como por ejemplo traer el valor de un atributo del componente,
o llamar un metodo, usando simpmente doble llaves `{{}}`.
* De igual manera si queremos ejecutar algun metodo del compoente cuando se ejcute un evento en un lemento html, podemos
apoyarnos de los parentris y angular nos mostrara una lista de loe ventos de los que dispoene ese evento, y poder nosotros
mandar a llamar un metodo del compoente por ejemplo `()`.
```html

<button (click)="sumar()" >this is the sume</button>

<h3>Este es el valor de la suma del metodo definido en el compoente {{num}}</h3>

```
