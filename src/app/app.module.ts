import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AmountComponent} from './amount-with-currency/shell/amount.component';
import {FormControlComponent} from './amount-with-currency/components/form-control/form-control.component';
import {InputFieldComponent} from './amount-with-currency/components/input-field/input-field.component';
import {AmountWithCurrencyComponent} from './amount-with-currency/components/amount-with-currency/amount-with-currency.component';
import {FormControlStateComponent} from './shared/form-control-state.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgSelectModule} from '@ng-select/ng-select';
import {ReactiveFormsModule} from '@angular/forms';
import {CurrencyWithAmountComponent} from './amount-with-currency/components/currency-with-amount/currency-with-amount.component';
import {ReactiveFormValidationComponent} from './reactive-form-validation/reactive-form-validation.component';
import {AmountSampleComponent} from './amount-with-currency/amount-sample/amount-sample.component';
import {FormControlActionComponent} from './shared/form-control-action.component';
import {DropdownComponent} from './amount-with-currency/components/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    AmountComponent,
    FormControlComponent,
    InputFieldComponent,
    AmountWithCurrencyComponent,
    CurrencyWithAmountComponent,
    FormControlStateComponent,
    ReactiveFormValidationComponent,
    AmountSampleComponent,
    FormControlActionComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
