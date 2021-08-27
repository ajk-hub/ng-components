import {FormControl, FormGroup} from '@angular/forms';
import {Component, Input} from '@angular/core';

@Component({template: ''})
export class FormControlActionComponent {

  @Input() formControlState = new FormControl();
  @Input() formGroupState = new FormGroup({});

  toControl(control: string): FormControl {
    return this.formGroupState.get(control) as FormControl;
  }

  isCurrentControlValid(): boolean {
    return this.formControlState.valid && (this.formControlState.dirty || this.formControlState.touched);
  }

  isCurrentControlInvalid(): boolean {
    return this.formControlState.invalid && (this.formControlState.dirty || this.formControlState.touched);
  }

}
