import {NgModule} from '@angular/core';
import {FormControlComponent} from './form-control/form-control.component';
import {InputFieldComponent} from './input-field/input-field.component';
import {DropdownComponent} from './dropdown/dropdown.component';
import {FormControlStateComponent} from './form-control-state.component';
import {FormControlActionComponent} from './form-control-action.component';
import {SharedModule} from '../../shared.module';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
  declarations: [
    FormControlStateComponent,
    FormControlActionComponent,
    FormControlComponent,
    InputFieldComponent,
    DropdownComponent
  ],
  imports: [
    SharedModule,
    NgSelectModule
  ],
  exports: [
    FormControlStateComponent,
    FormControlActionComponent,
    FormControlComponent,
    InputFieldComponent,
    DropdownComponent
  ]
})
export class AmountSharedModule {
}
