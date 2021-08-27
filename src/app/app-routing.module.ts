import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './landing-page.component';

const routes: Routes = [
  {path: 'home', component: LandingPageComponent},
  {path: 'form-sample', loadChildren: () => import('./form-sample/form-sample.module').then(m => m.FormSampleModule)},
  {path: 'beneficiary-form', loadChildren: () => import('./beneficiary-form/beneficiary-form.module').then(m => m.BeneficiaryFormModule)},
  {path: 'amount', loadChildren: () => import('./amount/amount.module').then(m => m.AmountModule)},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
