import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent {
  private _messageSuccessful: boolean = true;


  set messageSuccessful(value: boolean) {
    this._messageSuccessful = value;
  }


  get messageSuccessful(): boolean {
    return this._messageSuccessful;
  }
}
