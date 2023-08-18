import { Component } from '@angular/core';

@Component({
  selector: 'app-estructural',
  templateUrl: './estructural.component.html',
  styleUrls: ['./estructural.component.css']
})
export class EstructuralComponent {

  varforngIf: boolean = true;

  listaPets: String[] = ['Dong', 'Cat', 'Monkey', 'Tiger'];
  changeValueVarforngIf():void{
    this.varforngIf = !this.varforngIf;
  }

  addArray(){
    this.listaPets.push('hello soy nuevo')
  }


}
