import {Component, Input} from '@angular/core';
import {FormControlStateComponent} from '../../../shared/form-control-state.component';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-currency-with-amount',
  templateUrl: './currency-with-amount.component.html',
  styleUrls: ['./currency-with-amount.component.scss']
})
export class CurrencyWithAmountComponent extends FormControlStateComponent {

  @Input() currencyFormControlState = new FormControl();

  currencies = ['USD', 'JOD', 'KWD', 'NPR'];

  public currencyChanged(currency: string): void {
  }

  public onAmountChanged(amount: string): void {
  }

}
