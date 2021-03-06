import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FormControlStateComponent} from '../shared/form-control-state.component';
import {FormValidator} from '../../utility/form-validator';

@Component({
  selector: 'app-amount-sample',
  templateUrl: './amount-sample.component.html',
  styleUrls: ['./amount-sample.component.scss']
})
export class AmountSampleComponent extends FormControlStateComponent {

  currencies = ['USD', 'JOD', 'KWD', 'NPR'];

  formGroupState = new FormGroup({
    amount: new FormControl(null, [Validators.required, FormValidator.greaterThanZero]),
    currency: new FormControl(null, [Validators.required]),
    percentage: new FormControl(null, [Validators.required])
  });

  submit(): void {
    FormValidator.activateValidators(this.formGroupState);

    console.log('this.formGroupState', this.formGroupState);
  }

}
