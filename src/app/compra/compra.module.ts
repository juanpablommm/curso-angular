import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { NuevaCompraComponent } from './nueva-compra/nueva-compra.component';
import { HistorialCompraComponent } from './historial-compra/historial-compra.component';



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
    CommonModule
  ]
})
export class CompraModule { }
