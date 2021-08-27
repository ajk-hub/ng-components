import {Component, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-beneficiary-bank-list',
  templateUrl: './beneficiary-bank-list.component.html',
  styleUrls: ['./beneficiary-bank-list.component.scss']
})
export class BeneficiaryBankListComponent {

  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {
  }

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }

}
