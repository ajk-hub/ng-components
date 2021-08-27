import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormStateComponent} from '../../../shared/form-state.component';
import {GroupConfig} from '../../../beneficiary-config';
import {FormActionComponent} from '../../../shared/form-action.component';
import {FormValidator} from '../../../../utility/form-validator';

@Component({
  selector: 'app-beneficiary-bank-add',
  templateUrl: './beneficiary-bank-add.component.html',
  styleUrls: ['./beneficiary-bank-add.component.scss']
})
export class BeneficiaryBankAddComponent extends FormStateComponent implements OnInit {

  @Input() beneficiaryBankConfig: GroupConfig | undefined;
  @Output() addOrUpdate = new EventEmitter();
  @Output() closeOrCancel = new EventEmitter();

  ngOnInit(): void {
    FormActionComponent.initControl(this.beneficiaryBankConfig, this.formGroupState);
  }

  onSubmit(): void {
    FormValidator.activateValidators(this.formGroupState);

    if (this.formGroupState.valid) {
      this.addOrUpdate.emit();
      this.closeOrCancel.emit();
    }
  }

}
