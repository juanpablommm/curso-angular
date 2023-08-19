import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VentaModule} from "./venta.module";
import {NuevaVentaComponent} from "./nueva-venta/nueva-venta.component";
import {ListadoVentaComponent} from "./listado-venta/listado-venta.component";


/*configuramos los path, el pat padre lo dejmos en blanco ya que acrodemosno que el path vendra de los path
* definidos para el Module root,entonces es alla donde se definira el path
*
* Agregamo un pat por defual para que cuanod se llame desde el RoutingModule del Modulo root al path venta
* coja el path por defaul de est RoutingModule de el ModuleVenta*/

const routes: Routes = [
  {path: '', children:[
      {path: '', redirectTo: 'nueva', pathMatch: 'full'},
      {path: 'nueva', component: NuevaVentaComponent},
      {path: 'listado', component: ListadoVentaComponent},
      {path: 'hisotrial', component: ListadoVentaComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentaRoutingModule { }
