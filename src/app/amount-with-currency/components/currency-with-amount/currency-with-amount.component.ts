import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControlSharedComponent} from '../shared/component';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-currency-with-amount',
  templateUrl: './currency-with-amount.component.html',
  styleUrls: ['./currency-with-amount.component.scss']
})
export class CurrencyWithAmountComponent extends FormControlSharedComponent {

  @Input() currencyFormControlState = new FormControl();
  @Input() oldCurrencyFormControlState = new FormControl();

  @Output() onCurrencyChange = new EventEmitter();
  @Input() noLabel = false;

  currencies = ['USD', 'JOD', 'KWD', 'NPR'];

  emitChange($event: any): void {
    this.stateChanged.emit($event as number);
  }

  onFocusOutAmount(): void {
    console.log(`AmountFieldComponent.onFocusOutAmount()`);
  }

  hasSameValues(): boolean {
    return true;
  }

  formatOldAmount(): string {
    return 'Old Amount';
  }

}
