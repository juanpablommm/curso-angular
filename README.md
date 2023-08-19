# CursoAngular

# Clase 6 - Modulos

Si tenemos claro que un compoente es la pieza minima de software en un proyecto de angular,
un modulo no es mas que **la agrupacion de disntintos compoentes que se supone van a compartir
cierta funcionalidad o cierta logica de negocio.**
Un compoente en angular no puede existir si no esta puesto en un modulo, aunque esto es solo para la
vercion 13 de angular e inferiores, desde la version 14, ya se pueden desarrollar proyectos sin Modules.

* **Si creamos un compoente y este componente no esta declarado en un modulo, este compoente
no va a poder renderizarse*
Asi por ejemplo si yo voy a el Modulo de la app, y comento en el metadato `declarations` un modulo
de los que se han venido trabajando la aplicacion me dara un error a renderizarse
```typescript

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AttributeComponent,
    EstructuralComponent,
    //PipesComponent,
    EstadosPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```


![image](https://github.com/juanpablommm/curso-angular/assets/62717509/9deaea38-15cf-45a0-90f5-71f1b4e63308)

Donde se nos mencionara que nos exite el compoente, no es algo conocido, desde el lugar que lo estemos llamando, en este
caso que se esta llamando del compoente root, puesto que para poder utlizar un coponente tendria que estar incluido dentro de un modulo
para poderlo utilizar.

* Siempre en una aplicacion de angular cuando la creemos el Module principal es el `appModule` y en base a esto 
nosotros podemos crear nuevos modulos, agrupar nuestros componentes en ese modulo, y simplemente exportarlo y llmarlo dentro de `appModule` para tener 
esa funcionalida encapsulada

* Para crear un Module aplicamos el comando `gn generate module` mas el cnombre que le queramos dar.
```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CompraModule { }

```

donde observaremos una clase typeScript tal como con un compoente, con un pipe o demas, con un decorador,
un decorador que indica que es un **Module**, se puede observar como los metadatos de ese decorador
estan practicamente vacios, no existe ningun compoente asociado al metada `declarations`, no ahy un metadado
`bootstrap`pero el metadato bootstrap es el que indica la vista raiz, el compoente principal de la app, por ende 
este metadato solo debe llevarlo el Module root de la aplicacion, no se ve nada en comparacion al Module principal de la app.

* Ahora al momento de crear un nuevo modulo, y empezemos a crear los compoentes que hara parte de este, debemos 
especificar la ruta de la carpta donde se creo el Module para crearlos por ejemplo `ng generate compoent compras/listado`
lo que sucedera es que al momento de que se cree el component en esa ruta que se especifico, acutualizara
el modulo que ahy se encuentra, y agregara los compoentes en el metadado `declarations` para que esten listos para
ser renderizados en ese module, de coarde en donde se use ese mismo Module.

* Para nosotros poder utlizar un compoente definido en un Modulo disntinto del Module root, que hallamos creado en la app,
necesitaremos como primero que todo importar el modulo dentro del compote que lo vallamos a utlizar, en este caso lo utlizaremos
en el modulo root. por locual dentro del metadato `imports` se agregaria el componente para poder usarlo, y en segunda opcion
debemos de haber en el modulo que se creo y que estamos importando,cuales son los compoentes que se exportaran, para que puedan ser utlizaddos
desde afuera de otros Modules, esto los hacemos con el metadato `exports` en el decorador de nuestro Module que creamos.
Dado que los compoentes que tengamos en un modulo, declarados, solo son propios de ese modulo, y no los podran utilizar otros modulos, solo 
podremos usar fuera del modulos los componentes que decidamos exportar, ahora eso no signica que los que no se exportan, van a dar un
error ne la aplicacion o algo, esos se renderizaran en donde se esten usando pero solo dentro del modulo en el que estan declarados,
si un componente ese modulos los usa, y ese es el compoente que se exporta, se renderizara sin ningun problema los componentes que ese componente
esete usando y que no fueron exportados para ser usados en otros modulos.


* Esto es sumamente importante puesto que al dominarlo podremos crear nuestras aplicacions de una manera muy atomica y muy escalable, ya que en un modulo,
tendremos toda la logica relacionada a una funcionalidad de negocio,  y asi separar todo en unidades logicas,
que actuan como unica unidad, compoartiendo esa informacion y compoentes entre si, asi cuando alguien nuevo llegue, solo tendra que modficar
un modulo en especifico sin afectar a los demas.
