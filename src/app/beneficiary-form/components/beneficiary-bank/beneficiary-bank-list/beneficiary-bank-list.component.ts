import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {ComponentType, GroupConfig} from '../../../beneficiary-config';
import {FormStateComponent} from '../../../shared/form-state.component';
import {FormArray, FormGroup} from '@angular/forms';
import {Optional} from '../../../../utility/optional';
import {FormActionComponent} from '../../../shared/form-action.component';
import {BeneficiaryBankResource} from '../../../service/beneficiary-resource';

@Component({
  selector: 'app-beneficiary-bank-list',
  templateUrl: './beneficiary-bank-list.component.html',
  styleUrls: ['./beneficiary-bank-list.component.scss']
})
export class BeneficiaryBankListComponent extends FormStateComponent implements OnInit {

  @Input() beneficiaryBankResource: BeneficiaryBankResource[] | undefined;

  selectedBeneficiaryBank = -1;
  modalRef?: BsModalRef;
  beneficiaryBankConfig: GroupConfig | undefined;
  beneficiaryBankFormGroupState = new FormGroup({});
  beneficiaryBankFormArrayState = new FormArray([]);

  constructor(private modalService: BsModalService) {
    super();
  }

  ngOnInit(): void {
    this.beneficiaryBankConfig = this.componentConfig.get(ComponentType.beneficiaryBank);
    Optional.of(this.beneficiaryBankConfig)
      .ifExist(gc => this.formGroupState.addControl(gc.name, this.beneficiaryBankFormArrayState));

    Optional.ifTrue(this.beneficiaryBankResource)
      .then(bbr => {
        for (const beneficiaryBank of bbr) {
          const formGroupState = this.createFormGroupAndPatchValue(beneficiaryBank);
          this.beneficiaryBankFormArrayState.push(formGroupState);
        }
      });
  }

  onAdd(template: TemplateRef<any>): void {
    this.selectedBeneficiaryBank = -1;
    this.beneficiaryBankFormGroupState = new FormGroup({});
    this.openModal(template);
  }

  onEdit(index: number, template: TemplateRef<any>): void {
    this.selectedBeneficiaryBank = index;
    const formGroup = this.beneficiaryBankFormArrayState.controls[index] as FormGroup;
    this.beneficiaryBankFormGroupState = this.createFormGroupAndPatchValue(formGroup.value);

    this.openModal(template);
  }

  onDelete(index: number): void {
    this.beneficiaryBankFormArrayState.removeAt(index);
  }

  closeModal(): void {
    this.modalRef?.hide();
  }

  addOrUpdate(): void {
    if (this.selectedBeneficiaryBank < 0) {
      this.beneficiaryBankFormArrayState.push(this.beneficiaryBankFormGroupState);
    } else {
      const formGroup = this.beneficiaryBankFormArrayState.controls[this.selectedBeneficiaryBank] as FormGroup;
      formGroup.patchValue(this.beneficiaryBankFormGroupState.value);
    }
  }

  private openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, {ignoreBackdropClick: true});
  }

  private createFormGroupAndPatchValue(value: any): FormGroup {
    const formGroupState = new FormGroup({});
    FormActionComponent.initControl(this.beneficiaryBankConfig, formGroupState);
    formGroupState.patchValue(value);
    return formGroupState;
  }

}
