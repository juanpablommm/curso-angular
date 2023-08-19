# CursoAngular

# Clase 8 Guards

* Establecer una ruta poe defual, para la aplicacion, para hacer eso simplemente vamos a la configuracion
de paht que tenemos en nuestro RoutinngModule, y configuramos un path vacio, y aplicamos la
propiedad redirectTo y le pasamos un path ya definido, aunqe bien le podriamos pasar un compoente para que redirecione,
lo recomendable es pasarle un path ya existente, y especificamos con la propiedad pathMatch full, para indicarle que tome toda la
ruta, de esta menaera cuando el suaurio ingrese al host principal de l app, sera redirecionado al paht que definimos como por defualt.
```typescript
{path: '', redirectTo: 'pipes', pathMatch:'full'}
```

Generalmente antes de que nosotros queramos que el usuario acceda a una ruta, van aver ocaciones en que queremos confirmar algo, por ejemplo
si el usuario esta logueado o no en la aplicacion, si el usuario tiene permiso o no para aceder al recurso, y es para eso que angular nos provee 
los **Angular Guards**, para crear un guard tenemos que ejeuctar el comando `ng generate guard` mas el nombre que le queramos dar.
y nos preguntra que tipo de guar queremos crear.

![image](https://github.com/juanpablommm/curso-angular/assets/62717509/423114eb-3ee0-495e-b5d3-546ba68f93e4)

El primero **canActive** lo que nos permitira es ver si el usario puede ingresar a una ruta.
```typescript
import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  return true;
};

```

Los guard se crean en la ruta pero no se agregan a los modulos, porque no lo necesitan
 
Aplicaremos la logica que necesitamos para que valide si le damos accesos o no a un path de la aplicacion,
como pude ser aplicar un consumo a una pia rest y para validar autenticacion y en base a elle devolver true o false,
ya con esto agregamos el atributo `canActive` que poemos pasarle uno o varios guard en donde estamos configurando los path, en el 
RoudingModule y se aplicara la validacion, si renderizara el compoente que tengamos definido en el path, sino no avanzara.
