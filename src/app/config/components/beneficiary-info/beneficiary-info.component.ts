import {Component, OnInit} from '@angular/core';
import {FormStateComponent} from '../../shared/form-state.component';
import {ComponentType, GroupConfig} from '../../beneficiary-config';
import {FormActionComponent} from '../../shared/form-action.component';

@Component({
  selector: 'app-beneficiary-info',
  templateUrl: './beneficiary-info.component.html',
  styleUrls: ['./beneficiary-info.component.scss']
})
export class BeneficiaryInfoComponent extends FormStateComponent implements OnInit {

  beneficiaryInfoConfig: GroupConfig | undefined;

  ngOnInit(): void {
    this.beneficiaryInfoConfig = this.componentConfig.get(ComponentType.beneficiaryInfo);
    FormActionComponent.initControl(this.beneficiaryInfoConfig, this.formGroupState);
  }

}
