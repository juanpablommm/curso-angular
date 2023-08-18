import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{


    /*el metodo ngOninit es basicmante la primera funcion que se ejcuta una vez ael html de mi compoente ya se renderizo.
    La podemos usar para poner en ella cierta logica que se necesite en base a esta funcionalidad.
    * la podemos usar sin necesidad de implmentar la interface, dado que es como si estuviesemos trabjando con js y por
    * eso no nos maracara error a nivel de editor, pero si queremos manter el tipoado, si podemos implmentar la interface
    * Oninit y esta sino estamos implmnentando el metodo nos marcara un error, dado el tipaodo de typeScript, que nos mencionara
    * que debemos implemntar el metodo ngOninit*/

    /*en la clase podemos meter cualquier tipo de logica que necesitemos, con typesScript, ya sea OOP, manejando clases
    * y objetos, puedo creara varibales, crear funciones, cualquier logica que necesitemos*/




      name: String | null = 'Juampiss';
      num: number = 10;
    ngOnInit(): void {
        console.log('hello, i am gnOninit');
        console.log('this is filed of compoent => ' + this.name);
        console.log('la suma es => ' + this.sumar());
    }

    sumar(): number{
      return this.num+=10;
    }

}
