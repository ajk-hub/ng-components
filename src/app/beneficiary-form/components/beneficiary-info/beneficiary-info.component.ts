import {Component, Input, OnInit} from '@angular/core';
import {FormStateComponent} from '../../shared/form-state.component';
import {ComponentType, GroupConfig} from '../../beneficiary-config';
import {FormActionComponent} from '../../shared/form-action.component';
import {BeneficiaryResource} from '../../service/beneficiary-resource';
import {Optional} from '../../../utility/optional';

@Component({
  selector: 'app-beneficiary-info',
  templateUrl: './beneficiary-info.component.html',
  styleUrls: ['./beneficiary-info.component.scss']
})
export class BeneficiaryInfoComponent extends FormStateComponent implements OnInit {

  @Input() resource: BeneficiaryResource | undefined;

  beneficiaryInfoConfig: GroupConfig | undefined;

  ngOnInit(): void {
    this.beneficiaryInfoConfig = this.componentConfig.get(ComponentType.beneficiaryInfo);
    FormActionComponent.initControl(this.beneficiaryInfoConfig, this.formGroupState);

    Optional.of(this.resource)
      .ifExist(r => {
        Optional.of(this.toControl('name')).ifExist(c => c.setValue(r.name));
        Optional.of(this.toControl('nationality')).ifExist(c => c.setValue(r.nationality));
      });
  }

}
