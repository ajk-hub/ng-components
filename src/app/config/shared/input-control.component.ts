import {Component, Input} from '@angular/core';
import {FormStateComponent} from './form-state.component';

@Component({
  selector: 'app-input-control',
  template: `
    <label for="{{ id }}" class="form-label">{{ label }}</label>
    <input id="{{ id }}"
           type="text"
           class="form-control"
           [formControl]="toGroupControl(formGroupState, id)"
           [class.is-valid]="isGroupControlValid(formGroupState, id)"
           [class.is-invalid]="isGroupControlInvalid(formGroupState, id)"
    >
  `
})
export class InputControlComponent extends FormStateComponent {

  @Input() id = '';
  @Input() label = '';

}
