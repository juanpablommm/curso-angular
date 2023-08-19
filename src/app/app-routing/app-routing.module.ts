import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PipesComponent} from "../pipes/pipes.component";
import {NuevaCompraComponent} from "../compra/nueva-compra/nueva-compra.component";
import {EstructuralComponent} from "../estructural/estructural.component";
import {ListadoComponent} from "../compra/listado/listado.component";
import {HistorialCompraComponent} from "../compra/historial-compra/historial-compra.component";


/*se crea un array de Routes, en donde basicamente tnedremos que defnir objetos
* con los atributos path y component que son los mas importantes, el cual le pasaremos al moduloe RouterModuel
* en le metodo forRoot y de esta manera estaremos configurando nuestros path de la aplicacion, para el path que especifiquemos
* en un objeto del arreglo el compoente que definamos en la propidad component sera el que se renderizara*/
const routes: Routes = [
  {path: 'pipes', component: PipesComponent},
  {path: 'estructural', component: EstructuralComponent},
  {path: 'compra', component: ListadoComponent, children:[
      {path: 'nueva', component: NuevaCompraComponent},
      {path: 'historial', component: HistorialCompraComponent}
    ]}
]

@NgModule({
  declarations: [],
  imports: [
    /*este modulo lo tenemos que importar y es de vita importanci para poder gestionar los path
    * de la aplicacion hacia que compoente nos rerijira,
    * debemos de hacer la importancio llamando al metodo forRoot() de este modulo y pasandole como parametros
    * un array de Routes, que es el que se definne arriba.*/
    RouterModule.forRoot(routes)
  ], /*debemos de expordar el RouterModule para poder utilizarlos desde afuera, pues para poder que la configuracion de rutas
  de la aplicacion funcione este debera de colocarse en el template del compoente principal, por lo que tendremos que importar
  este modulo en el modulo root y de ahy si podemos usar el Router en el template del componente root*/
  exports:[RouterModule]
})
export class AppRoutingModule { }
