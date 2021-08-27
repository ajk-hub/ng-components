import {NgModule} from '@angular/core';
import {ReactiveFormValidationComponent} from './reactive-form-validation/reactive-form-validation.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared.module';
import {AmountSharedModule} from '../amount/shared/amount-shared.module';
import {NgSelectModule} from '@ng-select/ng-select';

const routes: Routes = [
  {path: '', component: ReactiveFormValidationComponent}
];

@NgModule({
  declarations: [
    ReactiveFormValidationComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    NgSelectModule,
    AmountSharedModule
  ],
  exports: []
})
export class FormSampleModule {
}
