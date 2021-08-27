import {Component, Input} from '@angular/core';
import {FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {FieldConfig, GroupConfig} from '../beneficiary-config';

@Component({template: ''})
export class FormActionComponent {

  @Input() formGroupState = new FormGroup({});

  public static initControl(config: GroupConfig | undefined, formGroup: FormGroup): void {
    if (config) {
      config.fields.forEach(field => {
        formGroup.addControl(field.name, new FormControl(field.value, this.getValidators(field)));
      });
    }
  }

  private static getValidators(field: FieldConfig): ValidatorFn[] {
    const validators = field.required ? [Validators.required] : [];

    if (field.validators) {
      validators.push(...field.validators);
    }

    return validators;
  }

  public toControl(control: string): FormControl {
    return this.toGroupControl(this.formGroupState, control);
  }

  public toGroupControl(formGroup: FormGroup, control: string): FormControl {
    return formGroup.get(control) as FormControl;
  }

  public isGroupControlValid(formGroup: FormGroup, controlName: string): boolean {
    return this.toGroupControl(formGroup, controlName).valid && this.toGroupControl(formGroup, controlName).touched;
  }

  public isGroupControlInvalid(formGroup: FormGroup, controlName: string): boolean {
    return this.toGroupControl(formGroup, controlName).invalid && this.toGroupControl(formGroup, controlName).touched;
  }

}
