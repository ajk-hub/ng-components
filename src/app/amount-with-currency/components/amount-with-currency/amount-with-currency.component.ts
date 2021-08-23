import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormControlSharedComponent} from '../shared/component';
import {FormControl} from '@angular/forms';
import {AmountCurrencyHandler} from '../shared/amount-currency-handler';

@Component({
  selector: 'app-amount-with-currency',
  templateUrl: './amount-with-currency.component.html',
  styleUrls: ['./amount-with-currency.component.scss']
})
export class AmountWithCurrencyComponent extends FormControlSharedComponent implements OnChanges {

  tempAmountFormControlState = new FormControl();

  @Input() currencyFormControlState = new FormControl();

  currencies = ['USD', 'JOD', 'KWD', 'NPR'];

  ngOnChanges(changes: SimpleChanges): void {
    const formControlState = changes.formControlState;

    if (!formControlState.previousValue && formControlState.currentValue) {
      this.tempAmountFormControlState.setValue(formControlState.currentValue.value?.toString());
      this.tempAmountFormControlState.setValidators(formControlState.currentValue.validator);

      this.formatAmountAndSetFormControlState();
    }
  }

  amountChanged(amount: string): void {
    this.formatAmountAndSetFormControlState();
  }

  currencyChanged(currency: string): void {
    this.formatAmountAndSetFormControlState();
  }

  private formatAmountAndSetFormControlState(): void {
    const formattedAmount = this.amountCurrencyHandler().formatAmountWithCommaAndDecimal();
    this.tempAmountFormControlState.setValue(formattedAmount);
    this.setFormControlState(formattedAmount);
  }

  private setFormControlState(amount: string): void {
    this.formControlState.setValue(AmountCurrencyHandler.removeComma(amount));
  }

  private amountCurrencyHandler(): AmountCurrencyHandler {
    return AmountCurrencyHandler.of(this.tempAmountFormControlState.value, this.currencyFormControlState.value);
  }

}
