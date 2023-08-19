# CursoAngular

# Clase 7 -RoutingModule Path Padres e Hijos

Sabiendo que en toda aplicacion web, siempre tenemos una ruta por cada pagina que vamos a ver.
Con angular lo tenemos que gestionar de alguna forma para que en base a un path, redirecione a un componente,
para ello se de crear un **Module** que se encargara de esta tarea, lo mas recomendable es crearlo a nivel 
raiz del la aplicaion junto con el Module root, el nombre del Module no difiere importancia pero por convension 
se sule llamar `AppRouting`.
En este Module tendremos que importar el Module `RouterModule` para poder gestionar los path de la aplicacion
hacia que componente nos redirecionara, pasandole un array con objetos de tipo `Routes` en el que especificaremos dos aributos
primordiales el path y el compoente a renderizar, exportando a `RouterModule`
```typescript
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PipesComponent} from "../pipes/pipes.component";

const routes: Routes = [
  {path: 'pipes', component: PipesComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

```

este componente tendra que ser importado desde el Modulo root, y en el Compoente root, establcemos la etiqueta
````html
<router-outlet></router-outlet>
````
Para poder que el componete que tiene el module RouterModule del cual nos apoyamos en la creacion y configuracion de
nuestro RoutingModule sea renderizado en algun lado, y pueda funcionar toda esta configuracion para los path de la aplicacion,
renderizandonos el componente que establecimos en base al path que coloquemos.

Ahora para palicar la redirecion desde un boton, no se usaria el evento clik del boton, sino que nos apoyariamos de una
directiva `routerLink` en donde especificaremos el path, para que dentre actuar nuestro RoutingModule que configuramos, y con la directiva
`routerLinkActive` que nos permitira aplicar una clase de estilo css cuando el paht este activo, ideal para los **Navbar**
```html
<input type="button" value="Ir a Compras" [routerLink]="['/compra']" routerLinkActive="active">
```

# Rutas Hijas

Cuando tenemos un proyecto grande, en el que tenemos ya varios modulos, relacionados cada uno con su respectiva logica de negocio,
no queriamos tener muchos compoentes desplegados, sino que configuramos un compoente padre y que este sea el contenedor de los path que se
manejen en su respctivo Module, donde para ello tendremos que configurar en el RoutingModule con la propidad `children` que recibe
un array de `Routes` tambien, esto en el array de de path que ya tenemos:
```typescript
const routes: Routes = [
  {path: 'pipes', component: PipesComponent},
  {path: 'estructural', component: EstructuralComponent},
  {path: 'compra', component: ListadoComponent, children:[
      {path: 'nueva', component: NuevaCompraComponent},
      {path: 'historial', component: HistorialCompraComponent}
    ]}
]
```

Basicamente cojemos un compoente como si fuera el contenedor del todos los compoentes que se trabajan en ese Module,
Esto se realizaria sobre el compoente que exportamos en ese modulo, el que hacemos accesible desde otro modulos, para que este cuando 
configuremos botenes que nos redirecionene al pah configurado, nos rendericen esos compoentes en ese modulo, para ellos, aplicamos el mismo procedimiento,
pero tenemos que importar en el modulo el Otro Module de donde ese el Componente que esta sirviendo como contendor de los otrso componentes, en el momento que 
configuramos el los path hijos, el modulo `RouterModule` para acceder a las directivas y compoentnes de este Module, pero no podemos importar
el Modulo Rounting que creamos para la aplicacion ya que este lo unico que nos exporta es un RouterModule ya configurado con los paths.

Y como ya sabemos para poder que funcione esa redirecion haci los path que configuremos debemos de colocar el compoente `<router-outlet></router-outlet>` en 
el compoente que queremos aplicar la redirecion con las directivas `routerLink`, sino no se aplicara la redirecion hacia eso compoentes para que sean renderizados.
