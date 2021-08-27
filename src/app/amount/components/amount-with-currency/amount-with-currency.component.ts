import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {FormControlStateComponent} from '../../shared/form-control-state.component';
import {FormControl} from '@angular/forms';
import {AmountCurrencyHandler} from '../utility/amount-currency-handler';

@Component({
  selector: 'app-amount-with-currency',
  templateUrl: './amount-with-currency.component.html',
  styleUrls: ['./amount-with-currency.component.scss']
})
export class AmountWithCurrencyComponent extends FormControlStateComponent implements OnChanges {

  tempAmountFormControlState = new FormControl();

  @Input() currencyFormControlState = new FormControl();
  @Output() amountChanged = new EventEmitter<string>();

  currencies = ['USD', 'JOD', 'KWD', 'NPR'];

  public ngOnChanges(changes: SimpleChanges): void {
    const formControlState = changes.formControlState;
    const control = formControlState.currentValue;

    if (!formControlState.previousValue && control) {
      const currency = this.currencies[0];
      this.tempAmountFormControlState = new FormControl(null, control.validator, control.asyncValidator);
      // this.currencyFormControlState.setValue(currency);
      this.formGroupState.addControl('tempAmount', this.tempAmountFormControlState);

      this.formatAmount(control.value?.toString(), currency);
    }
  }

  public onAmountChanged(amount: string): void {
    this.formatAmount(amount, this.currencyFormControlState.value);
    this.formControlState.markAsTouched();
    this.formControlState.markAsDirty();
  }

  public currencyChanged(currency: string): void {
    this.formatAmount(this.formControlState.value, currency);
  }

  private formatAmount(amount: string, currency: string): void {
    const formattedAmount = AmountCurrencyHandler.formatAmount(amount, currency);
    this.tempAmountFormControlState.setValue(formattedAmount);

    const cleanseAmount = AmountCurrencyHandler.removeComma(formattedAmount);

    this.formControlState.setValue(cleanseAmount);
    this.formControlState.updateValueAndValidity();

    if (amount && amount !== '') {
      this.amountChanged.emit(cleanseAmount);
    }
  }

}
