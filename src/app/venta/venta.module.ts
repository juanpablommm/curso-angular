import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentaRoutingModule } from './venta-routing.module';
import { HistorialComponent } from './historial/historial.component';
import { NuevaVentaComponent } from './nueva-venta/nueva-venta.component';
import { ListadoVentaComponent } from './listado-venta/listado-venta.component';


@NgModule({
  declarations: [
    HistorialComponent,
    NuevaVentaComponent,
    ListadoVentaComponent
  ],
  imports: [
    CommonModule,
    VentaRoutingModule
  ]
})
export class VentaModule { }
