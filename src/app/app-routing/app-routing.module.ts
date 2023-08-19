import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PipesComponent} from "../pipes/pipes.component";
import {NuevaCompraComponent} from "../compra/nueva-compra/nueva-compra.component";
import {EstructuralComponent} from "../estructural/estructural.component";
import {ListadoComponent} from "../compra/listado/listado.component";
import {HistorialCompraComponent} from "../compra/historial-compra/historial-compra.component";
import {authGuard} from "../auth.guard";
import {VentaModule} from "../venta/venta.module";


/*se crea un array de Routes, en donde basicamente tnedremos que defnir objetos
* con los atributos path y component que son los mas importantes, el cual le pasaremos al moduloe RouterModuel
* en le metodo forRoot y de esta manera estaremos configurando nuestros path de la aplicacion, para el path que especifiquemos
* en un objeto del arreglo el compoente que definamos en la propidad component sera el que se renderizara*/
const routes: Routes = [
  /*estamos configuranod un path por defaul para que al momento que el usuario dentre ela host principa de la palicacion
  * sea redirecionado a un path por default, tiene que ser un path ya esistente, en este caso al path de pipes, aun bien
  * podriamos mandar a renderizar un compoenente en este path lo recomendable es mandarlo a uno ya existente.
  * y con la propiedad patchMacht lo que hacemos es que tome el pathc completo es decir hppt://localhost:8008 por ejemplo
  * y no un path relativo*/
  {path: '', redirectTo: 'pipes', pathMatch:'full'},
  {path: 'pipes', component: PipesComponent},
  {path: 'estructural', component: EstructuralComponent,
    /*para aplicar guards que validen y brinden seguridad a nuestros path, segun la logica que
    * hallamos configurados en ellos, utlizamos en atributo canActive, pasandole uno o varios guards*/
    canActivate:[authGuard]},
  {path: 'compra', component: ListadoComponent, children:[
      {path: 'nueva', component: NuevaCompraComponent},
      {path: 'historial', component: HistorialCompraComponent}
    ]},

  /*de esta forma conseguiremos dos cosas, la primera es tener configurados los path de sede modulo de una manera totalmente
  * independiente y la segunda, es que estos compoentenes no se cargaran en el inicio de la aplicacion, no estaremos cargandolos
  * innecesariamente, soloa mente se cargaran cuando el usuario calla hacia el paht de venta*/
  {path: 'venta', loadChildren: () => import('../venta/venta.module').then((m) => m.VentaModule)}
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
