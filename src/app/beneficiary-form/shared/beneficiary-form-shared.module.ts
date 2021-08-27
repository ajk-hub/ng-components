import {NgModule} from '@angular/core';
import {FormActionComponent} from './form-action.component';
import {FormStateComponent} from './form-state.component';
import {GroupContainerComponent} from './group-container.component';
import {InputControlComponent} from './input-control.component';
import {SharedModule} from '../../shared.module';

@NgModule({
  declarations: [
    FormActionComponent,
    FormStateComponent,
    GroupContainerComponent,
    InputControlComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    FormActionComponent,
    FormStateComponent,
    GroupContainerComponent,
    InputControlComponent
  ]
})
export class BeneficiaryFormSharedModule {
}
