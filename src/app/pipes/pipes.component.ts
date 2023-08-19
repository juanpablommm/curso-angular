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
}
