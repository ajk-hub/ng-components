import {Component, OnInit} from '@angular/core';
import {FormStateComponent} from '../shared/form-state.component';
import {BeneficiaryConfig, BeneficiaryConfigHelper, ControlType} from '../beneficiary-config';
import {FormValidator} from '../../utility/form-validator';
import {BeneficiaryService} from '../service/beneficiary.service';
import {Observable} from 'rxjs';
import {BeneficiaryResource} from '../service/beneficiary-resource';
import {NgxSpinnerService} from 'ngx-bootstrap-spinner';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-config-shell',
  templateUrl: './beneficiary-form.component.html',
  styleUrls: ['./beneficiary-form.component.scss']
})
export class BeneficiaryFormComponent extends FormStateComponent implements OnInit {

  reference: string | undefined;
  componentConfig = BeneficiaryConfig.coreConfig;
  beneficiaryResource$: Observable<BeneficiaryResource> | undefined;

  constructor(
    private beneficiaryService: BeneficiaryService,
    private spinner: NgxSpinnerService
  ) {
    super();
  }

// Field Type
  // form control
  // form group
  // form array

  // Form State
  // state -> control, form group, form array
  // valid
  // errors
  // new value
  // old value

  // Configuration
  // field name
  // label
  // type -> control, group, array
  // group name
  // required
  // validation

  sections: { name: string, label: string }[] = [];

  ngOnInit(): void {
    // this.reference = 'ref';
    for (const config of this.componentConfig.values()) {
      this.sections.push({name: config.name, label: config.label});
    }

    this.spinner.show();

    this.beneficiaryResource$ = this.beneficiaryService.getBeneficiary(this.reference)
      .pipe(tap(() => this.spinner.hide()));
  }

  isShowErrorSection(sectionName: string): boolean {
    const componentType = BeneficiaryConfigHelper.getComponentType(sectionName);
    const groupConfig = this.componentConfig.get(componentType);

    if (groupConfig) {
      if (groupConfig.type === ControlType.CONTROL) {
        const field = groupConfig.fields.find(f => {
          const control = this.toControl(f.name);
          return control && control.invalid && (control.dirty || control.touched);
        });

        return !!field;
      } else if (groupConfig.type === ControlType.GROUP || groupConfig.type === ControlType.ARRAY) {
        const formGroup = this.formGroupState.get(groupConfig.name);
        return !!(formGroup && formGroup.invalid && (formGroup.dirty || formGroup.touched));
      }
    }

    return false;
  }

  submitForm(): void {
    FormValidator.activateValidators(this.formGroupState);

    console.log('this.formGroupState', this.formGroupState);
    console.log('this.formGroupState.value', this.formGroupState.value);
  }

}
