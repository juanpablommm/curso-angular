import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  name: String = 'JuaMpis montoYa';
  date: String = '2023-02-13T13:59:31.238Z'

  transactionState: number = 1;

  changeStateTransaction():void{
    this.transactionState = (this.transactionState == 1)? 2: 1;
  }


  /*simulamos que tenemos un id del suario, traido de una api rest, y los guardamos en el localStorage para
  * validarlo en la logica que apliquemo en el guard y asi dar accesos o no a un recurso*/
  constructor() {
    localStorage.setItem('idUser', '1234');
  }
}
