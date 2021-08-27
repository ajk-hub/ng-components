import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {FormControlActionComponent} from '../shared/form-control-action.component';
import {FormControlValidator} from '../../utility/form-control-validator';

@Component({
  selector: 'app-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.scss']
})
export class AmountComponent extends FormControlActionComponent implements OnInit {

  amountControl = new FormControl(null, [Validators.required, FormControlValidator.greaterThanZero]);
  currencyControl = new FormControl(null, [Validators.required]);

  ngOnInit(): void {
    this.formGroupState.addControl('amount', this.amountControl);
    this.formGroupState.addControl('currency', this.currencyControl);
  }

  submit(): void {
    FormControlValidator.activateValidators(this.formGroupState);

    console.log('this.formGroupState', this.formGroupState);
  }

}
