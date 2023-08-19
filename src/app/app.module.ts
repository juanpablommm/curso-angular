import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AttributeComponent } from './attribute/attribute.component';
import { EstructuralComponent } from './estructural/estructural.component';
import {FormsModule} from "@angular/forms";
import { PipesComponent } from './pipes/pipes.component';
import { EstadosPipe } from './pipes/estados.pipe';
import {CompraModule} from "./compra/compra.module";
import {AppRoutingModule} from "./app-routing/app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AttributeComponent,
    EstructuralComponent,
    PipesComponent,
    EstadosPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    /*importamos el modulo de compra creado, para poder ser usado dentro de los componentes de este Module,
    * de lo contrario no lo podremos usar, cuando coloquemos la etiqueta de ese modulo en una template nos
    * dara un error en la aplicacion*/
    CompraModule,

    /*importamos nuestro RoutingModule para poder usar la configuracion del paht que definimos,
    * pra ellos debemos especificar quien va a contener esto, para ello lo colocaremos el compoente
    * router-outlet que esta en toda la configuracion que realizamos con nuestro RoutingModule y la importacion
    * del Module RouterModule en ese Module y de esta manera podres tener una configuracion de paths que se nos renderizara el
    * componente establecido para el paht que configuramoe en el RoutingModule que creamos*/
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
/*observamos como al crear el compoente se agreaga al modulo root,
* en el metadato declarations del decorador Ngmodule, el cual basicamente es el que el que se encarga de decirle
* al modulo cuales son las vistas que pertenecen a est, donde existen 3 tipos de vistas componentes, directivas y pipes */
export class AppModule { }
