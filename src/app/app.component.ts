import { Component } from '@angular/core';

/*cada component tien ensima de la calse esto, a lo cual se le conoce como decorador*/
@Component({
  selector: 'app-my-firts',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curso_angular';
}
