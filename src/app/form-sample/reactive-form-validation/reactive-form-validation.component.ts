import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FormValidator} from '../../utility/form-validator';

@Component({
  selector: 'app-reactive-form-validation',
  templateUrl: './reactive-form-validation.component.html',
  styleUrls: ['./reactive-form-validation.component.scss']
})
export class ReactiveFormValidationComponent {

  currencies = ['USD', 'JOD', 'KWD', 'NPR'];

  amountGroup = new FormGroup({
    amount: new FormControl(null, [Validators.required, FormValidator.greaterThanZero]),
    currency: new FormControl(null, Validators.required)
  });

  submit(): void {
    FormValidator.activateValidators(this.amountGroup);

    console.log('this.amountGroup.value', this.amountGroup.value);
    console.log('this.amountGroup', this.amountGroup);
  }

  toControl(control: string): FormControl {
    return this.amountGroup.get(control) as FormControl;
  }

  isValid(control: string): boolean {
    return this.toControl(control).valid
      && (this.toControl(control).dirty || this.toControl(control).touched);
  }

  isInvalid(control: string): boolean {
    return this.toControl(control).invalid
      && (this.toControl(control).dirty || this.toControl(control).touched);
  }

}
