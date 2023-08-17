# CursoAngular

# Clase 2 - Estructura de un Proyecto Angular


Cuando creamos un proyecto angular, crea la siguiente estructura, donde cabe resaltar que la carpta de .angular y .vscode no son refrentres, y en cuanto
a la carpeta denode_modulos es donde se guardan todos el conjunto de dependencias que contiene 
nuestro proyecto, y que se manejara cuando cada desarrollador en local se base el proyecto y trabaje con el.

![image](https://github.com/juanpablommm/curso-angular/assets/62717509/4f79376c-fba6-4a4b-a52c-81b799959f83)

Se observa la carpeta **src** que es la que contiene como tal toda al app.

* Se suele crear un archivo denominado **.browserlist** el cual no se deberia modficar, sin necesidad
ya que en este se defnine en que versiones y en que navegadores basicamente podremos 
renderizar nuestra app

* Archivo **.editorconfig** este basicamente nos permitira configurar cosas como las reglas de indentado
y otras configuraciones que queremos que se sincronocen en cada editor donde se habara el proyecto.

* Archivo **angular.json** este archivo si que es importante, es bascimanete el archivo de configuracion de
nuestra aplicacion, con este podremos ir manejando las versiones que salgan de nuestros proyecto, podremos
mirar el tipo de proyecto que es por ejemplo, podremos ver las hojas de estilo que utliza el proyecto, es decir si maneja
un compilador de estilos o trabja con css puro, el prefijo de la palicacion el cual por ejemplo
cuando creamos un nuevo componente podremos apreciar como este tendra el prefijo de la aplicacion, podremos configurar otrsos 
scrip, librerias extras que se agregen a la app.
Este archivo nos servira para configurar distintos ambientes de trabajo, LOCAL, DE, QA, PRO y tambien algunas configuraciones
sobre angular en el proyecto, como por ejemplo el tamaño de la app.

* Archivo **karma.config.js** el cual es el encargado de la configuracion para de todo el tema de **UniTest** con un suit que nos provee
angular con un entorno llamdo karma a travez de jasmin.

* El archivo **package.json** que es mas propio de npm , en el cual podremos identificar e instalar nuestras dependencias del proyecto.

* el archivo **package-lock.json**  que viene siendo como un hisotrial de las dependecias que vamos
instalando en el proyecto

* Los archivos de **tsconfig.app.json**, **tsconfig.json** y **tsconfig.spec.json** con archivos de configuracion de 
typeScript

## Carpeta src

* La acarpta **app**  es el directorio deonde guardamos todo el codigo fuente de angular, en esta se veran relfejados los componentes cada uno c
con su respectiva carpeta y archivos.
* La carpta **assest** es el dicrectorio para las imagenes y otros recuersos que necesita la app
* El archivo **styles.css** es como una hoja de estilos css global para aplicar estilo dobre toda la app
* El archivo **test.ts** es el archivo principal para lanzar el ambienete de prruebas en Angular
* El archivo **index.html** es el archivo html principal de al app, como tal la SPA, y todo el contenido de la aplicacion
va estar dentro del body de este archivo, tal si fuera como cualquier elemento html estruturado.
![image](https://github.com/juanpablommm/curso-angular/assets/62717509/55b70edc-01e2-4010-9b43-73ef78225fe2)
En este caso se esta caso se observa como se esta colocando el componente root en el body del index.html.
Todo componente que se cree en angualar tomara en el nombre el prefijo de la aplicacion que hallamos definido en el
angular.json.
Se agrega tal si fuera una etiqueta html el componente, con el nombre que le hallamos asignado.

* El **favicon.io** es el la imagen favicon que esta en nuestra pagina

* La carpta **environment** con los disntitos archivos typeScript que cremos en el, por ejemplo **environment.pro.ts**
tendremos configuradas en el las varibles de entorno que estaremos utlizando para nuestro proyecto, posiblemente con un archivo

* El archivo **app.module** es el modulo de angualar que estamos utlizando, los modulos en angular, son como una clase que agrupa
compoentes, servicios y demas que necesitamos para que nuestra aplicacion funcione. 
**hasta la version 13 de angular, lo mas recomendables es seprar nuestra aplicion por modulos** ya desde la version 14 de angular
podemos hacer otros pasamos para obviar el trabajar con modulos.

**El modulo se puede dentender como una carpeta, un conjunsto, de compoentes que interatuan y se necesitan entre sip
para que la app funcione**
  ![image](https://github.com/juanpablommm/curso-angular/assets/62717509/2e1f82cc-814f-4be5-a8b0-db1a35fb3a7d)
En este caso el modulo solo tiene un componente, **los coponentes por lo regular contienen 3 archivos**
el **component.ts**, **component.css** y el **component.html**, en algunos casos se puede obviar la parte del html y del css, teniendo como minimio
el archivo **component.ts** pero lo mas habitual es que contengan estos 3 archivos, mas uno extras que seria el de las test, **component.spec.ts**

El **el component.ts** es el que contendra toda la logica de programacion de nuestro coponente, desde crear varibles, funciones, llamar servicios, etc.

Cada component tiene ensima de la calse que se esta definiendo como tal con typeScript algo que se le conoce como **decorador**, basicamente todo en eangular funciona
con decoradores, si esto se borrar del compoente, no seria nda mas que una simple clase con typeScript, con el decorador angular sabe que esa clase actuara como un componente.

En este se le puede poener, cual es el archivo html y el archivo css que esta ligado a ese componente y podemos ver como se le esta llamndo a ese componente.
![image](https://github.com/juanpablommm/curso-angular/assets/62717509/05fa4e3e-eb54-42bc-b459-657f9bdcacb0)

