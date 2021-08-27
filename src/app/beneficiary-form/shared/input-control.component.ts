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

    <ng-container *ngIf="isGroupControlInvalid(formGroupState, id)">
      <div [class]="'invalid-feedback'" *ngIf="toGroupControl(formGroupState, id).errors?.required">
        * Value must be provided.
      </div>

      <div [class]="'invalid-feedback'" *ngIf="toGroupControl(formGroupState, id).errors?.message">
        * {{ toGroupControl(formGroupState, id).errors?.message }}
      </div>
    </ng-container>
  `
})
export class InputControlComponent extends FormStateComponent {

  @Input() id = '';
  @Input() label = '';

}
