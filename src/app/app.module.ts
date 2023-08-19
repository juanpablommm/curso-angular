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
    CompraModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
/*observamos como al crear el compoente se agreaga al modulo root,
* en el metadato declarations del decorador Ngmodule, el cual basicamente es el que el que se encarga de decirle
* al modulo cuales son las vistas que pertenecen a est, donde existen 3 tipos de vistas componentes, directivas y pipes */
export class AppModule { }
