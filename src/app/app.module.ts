import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AmountComponent} from './amount-with-currency/shell/amount.component';
import {FormControlComponent} from './amount-with-currency/components/form-control/form-control.component';
import {InputFieldComponent} from './amount-with-currency/components/input-field/input-field.component';
import {AmountWithCurrencyComponent} from './amount-with-currency/components/amount-with-currency/amount-with-currency.component';
import {FormControlSharedComponent} from './amount-with-currency/components/shared/component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgSelectModule} from '@ng-select/ng-select';
import {ReactiveFormsModule} from '@angular/forms';
import { PercentageFieldComponent } from './amount-with-currency/components/percentage-field/percentage-field.component';
import {CurrencyWithAmountComponent} from './amount-with-currency/components/currency-with-amount/currency-with-amount.component';

@NgModule({
  declarations: [
    AppComponent,
    AmountComponent,
    FormControlComponent,
    InputFieldComponent,
    AmountWithCurrencyComponent,
    CurrencyWithAmountComponent,
    FormControlSharedComponent,
    PercentageFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgSelectModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
