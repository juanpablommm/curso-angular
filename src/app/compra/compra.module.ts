import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { NuevaCompraComponent } from './nueva-compra/nueva-compra.component';
import { HistorialCompraComponent } from './historial-compra/historial-compra.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    ListadoComponent,
    NuevaCompraComponent,
    HistorialCompraComponent
  ],
  /*con el metadato exports, estaremos indicando que componentes podran utilizarse desde afuera en otros modulos,
  * de lo contrario no se podran tulizar los demas compoentes de este modulo*/
  exports: [NuevaCompraComponent],
  imports: [
    CommonModule,
    /*importamos el RouterModule para poderlo utlizar en nuestros componentes, solo debemos importar el RouterModule,
    * no el AppRoutingModule que configuramos para toda la aplicacion, por que necesitamos es acceder a las diferentes directivas
    * que nos dan y a los componentes y no a nuestro AppRoutingModule, el cual nos exporta es un RouterModule ya configurado con los Path*/
    RouterModule
  ]
})
export class CompraModule { }
