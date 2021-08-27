import {NgModule} from '@angular/core';
import {BeneficiaryFormComponent} from './container/beneficiary-form.component';
import {BeneficiaryInfoComponent} from './components/beneficiary-info/beneficiary-info.component';
import {AddressComponent} from './components/address/address.component';
import {BeneficiaryBankListComponent} from './components/beneficiary-bank/beneficiary-bank-list/beneficiary-bank-list.component';
import {BeneficiaryBankAddComponent} from './components/beneficiary-bank/beneficiary-bank-add/beneficiary-bank-add.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared.module';
import {BeneficiaryFormSharedModule} from './shared/beneficiary-form-shared.module';
import {ModalModule} from 'ngx-bootstrap/modal';

const routes: Routes = [
  {path: '', component: BeneficiaryFormComponent}
];

@NgModule({
  declarations: [
    BeneficiaryFormComponent,
    BeneficiaryInfoComponent,
    AddressComponent,
    BeneficiaryBankListComponent,
    BeneficiaryBankAddComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    BeneficiaryFormSharedModule,
    ModalModule.forChild()
  ],
  exports: []
})
export class BeneficiaryFormModule {
}
