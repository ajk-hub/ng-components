import {AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';
import {Utility} from '../amount-with-currency/components/shared/utility';

export class FormControlValidator {

  static activateValidators(group: FormGroup): void {
    Object.keys(group.controls)
      .forEach(key => {
        if (group.controls[key] instanceof FormGroup
          || group.controls[key] instanceof FormArray) {

          FormControlValidator.activateValidators(group.controls[key] as FormGroup);
        }
        group.get(key)?.markAsTouched({onlySelf: true});
        group.get(key)?.markAsDirty({onlySelf: true});
        group.markAsTouched({onlySelf: true});
        group.updateValueAndValidity();
      });
  }

  static activateValidator(control: FormControl): void {
    control.markAsTouched({onlySelf: true});
    control.markAsDirty({onlySelf: true});
    control.updateValueAndValidity();
  }

  static greaterThanZero(control: AbstractControl): ValidationErrors | null {
    if (Utility.isValid(control.value)) {
      const amount: number = +control.value;
      return amount <= 0
        ? {message: 'Amount should be greater than zero.'}
        : null;
    }
    return null;
  }

  static amountValidator(amount: string, currency: string): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const messages = [];
      const formGroup = group as FormGroup;
      const amt: number = +formGroup.get(amount)?.value;
      const curr = formGroup.get(currency)?.value;

      if (!amt) {
        messages.push('Amount must be provided.');
      } else if (amt <= 0) {
        messages.push('Amount must be greater than zero.');
      }
      if (!curr || curr === '') {
        messages.push('Currency must be provided.');
      }

      return {messages};
    };
  }

}
