import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

export enum InputType {
  text = 'text',
  textarea = 'textarea'
}

@Component({template: ''})
export class FormControlSharedComponent {
  inputType = '';

  @Input() id = '';
  @Input() label = '';
  @Input() required = false;
  @Input() placeholder = '';
  @Input() showError = true;

  @Input() labelColumnClassStyle = '';
  @Input() inputColumnClassStyle = '';

  @Input() formControlState = new FormControl();

  @Output() stateChanged: EventEmitter<any> = new EventEmitter();

  @Input()
  set type(value: string) {
    const iType = Object.keys(InputType).find(key => key.toString() === value);
    this.inputType = iType ? iType : InputType.text;
  }

}
