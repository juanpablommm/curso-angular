# CursoAngular

# Clase 9 lazy loading en las Rutas


Con las aplicaciones SPA, sucede que al monento de que inican, cargan una vez al incicio todos 
los modulos y ya despues el usuario puede recorrer entre ellos, sin necesidad de que la pagina
se recargue, por lo cual si, nosotros tenemos muchas paginas, muchas rutas y muchos compoentes, puden
hacer que la carga inicial de la aplicacion sea un poco lenta.

**Para esto existe el famoso lazy loading** que basicamente sifnigca carga peresoza, y consiste en
hacer una carga a demanda de los modulos que definamos, asi por ejemplo **si nosotros tenemos 10 modulos,
de los cuales sabemos que solo van hacer de mañor uso solo dos modulos, pues estos van a cargar en el inicio 
de la aplicacion y los demas modulos van a cargar cuando el usuario intente entrar a la ruta de cada modolo, haciendo
de esta manera que la carga inical sea mucho mas rapida y cuando el usuario quiera entrar a una de esas rutas,
va a recien descargar ese modulo, y no al inicio de la aplicacion evitando saturarla con modulos que en lo probable
el usuario no usara al inicio de la aplicacion**

Cargar un modulo a la vez, no va causar incoveniente, pero cargar por ejemplo 40, 50 modulos is la aplicacion ay es muy
grande va a costarle a la aplicacion.

Para aplicar esto al momento de crear un modulo debemos de pasarle unos comandos mas.
`gn generate module venta --routing=true` de esta manera se creara una carpeta en la cual encontraremos el Module, y encontraremos 
un RoutingModule para ese modulo, el cual ya  estara importado en el Module para su uso.
donde lo que procedemos hacer es configurar los path para los componentes de ese Module en el RoutingModuel, configurando un path por
defualt y ese Module lo iportamos al Moduerlo root para poderlo usar en el RoutingModule del Modulo root, en donde
seimpmente foniguraremos un path de la siguiente manera.
` {path: 'venta', loadChildren: () => import('../venta/venta.module').then((m) => m.VentaModule)}
`

Logrando dos cosas con esta forma, primero que los path configurados para ese modulo, no los manera el RoutingModule del Module root,
sino que los manejara el propio modulo, siendo mas elegible y organizado, y en segund lugar **que al momento de que se cargen los
compoentes en el inicio de la aplicacion no se cargara todavi los compoentes de ese Module, evitanto carga inencesaria, solamente
se cargaran cuando el suario ya le de en el path**
