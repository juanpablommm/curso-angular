# CursoAngular 

# Clase 1 - Creacion de un proyecto - Conceptos Basicos

* Para generar un proyecto en angular luego de la instalacion de NodeJS y el AngularCli
debemos de jecutar el comando `ng new "nombre"` lo cual nos creara un proyecto con la estructura necesaria 
para comenzar a trabajar, donde se nos preguntara antes de crearlo, si queremos que la aplicacion contenga 
**routing** y si queremos que la app tenga un procesador de css, o css nativo.

* Una vez estemos dentro del proyecto ya creado para ejecutar el el cliente de angular, siempre utlizaremos `ng`
seguido del comando que necesitemos como en el caso de la creacion, **ya una ves estemos trabajando dentro de la appp
cada vez que qureamos crear algo dentro utlizamoremos** `ng generate` junto con lo que vallamos a crear,
por ejemplo para crear un compoente `ng generate component "nombrecomponente"`o mediante los alias, `ng g c` donde la
g esta representado a la plabra generate y la c a la palabra component, del mismo modo, cuando
necesitemos crear un service o algo mas de angular para la app, `ng generate service "nombreservice"`

* Para correr el proyecto podemos usar el comando `ng serve` que nos dara una espcie de servidor para poder
consultar el proyecto en el localhost bajo el puerto que se defina, nos preguntara si quermos ver las metricas
de analitica, esto ya para temas mas avanzados...

Este comando tiene unas opciones como `-o` paraindicar que apenas levante el proyecto no nos muestre en el browser,
como tambien la opcion `--port="puertoMaquina"` donde podremos elegir un puerto para arrancar la aplicacion.
![image](https://github.com/juanpablommm/curso-angular/assets/62717509/83040dc8-f75a-451f-8a7c-840680d159a4)
