import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControlActionComponent} from './form-control-action.component';

export enum InputType {
  text = 'text',
  textarea = 'textarea'
}

@Component({template: ''})
export class FormControlStateComponent extends FormControlActionComponent {
  inputType = '';

  @Input() id = '';
  @Input() label = '';
  @Input() required = false;
  @Input() placeholder = '';
  @Input() showError = true;

  @Output() stateChanged: EventEmitter<any> = new EventEmitter();

  @Input()
  set type(value: string) {
    const iType = Object.keys(InputType).find(key => key.toString() === value);
    this.inputType = iType ? iType : InputType.text;
  }

}
