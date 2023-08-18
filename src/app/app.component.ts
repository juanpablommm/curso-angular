import {Component, OnInit} from '@angular/core';


/*cada component tiene ensima de la calse esto, a lo cual se le conoce como decorador,
* que esta indicando que es un compoente, es algo similar a las anotaciones de spring,
*
* * El metadato **temaplateUrl** hace referencia al elmento html que se va a renderizar en este componente, el html de este compoente.
* * El metadato **selector**, es el que definene un nombre o como su mismo nombre lo dice un selector desde el cual
se podra llamar a redenrizar el compoente, tal como lo hace el index.html de la aplicacion con este compoente root.
* * El metadato **styleUrl** al igual que el anterior inicara cual es el archivo de estilo css que le pertecne a este compoente*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
}
