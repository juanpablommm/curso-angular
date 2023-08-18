import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
/*observamos como al crear el compoente se agreaga al modulo root,
* en el metadato declarations del decorador Ngmodule, el cual basicamente es el que el que se encarga de decirle
* al modulo cuales son las vistas que pertenecen a est, donde existen 3 tipos de vistas componentes, directivas y pipes */
export class AppModule { }
