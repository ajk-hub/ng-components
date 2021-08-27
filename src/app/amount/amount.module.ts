import {NgModule} from '@angular/core';
import {AmountComponent} from './container/amount.component';
import {AmountWithCurrencyComponent} from './components/amount-with-currency/amount-with-currency.component';
import {CurrencyWithAmountComponent} from './components/currency-with-amount/currency-with-amount.component';
import {AmountSampleComponent} from './amount-sample/amount-sample.component';
import {RouterModule, Routes} from '@angular/router';
import {AmountSharedModule} from './shared/amount-shared.module';
import {SharedModule} from '../shared.module';

const routes: Routes = [
  {path: '', component: AmountComponent},
  {path: 'sample', component: AmountSampleComponent}
];

@NgModule({
  declarations: [
    AmountComponent,
    AmountSampleComponent,
    AmountWithCurrencyComponent,
    CurrencyWithAmountComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    AmountSharedModule
  ],
  exports: []
})
export class AmountModule {
}
