import {Component, OnInit} from '@angular/core';
import {ComponentType, GroupConfig} from '../../beneficiary-config';
import {FormActionComponent} from '../../shared/form-action.component';
import {FormStateComponent} from '../../shared/form-state.component';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent extends FormStateComponent implements OnInit {

  addressConfig: GroupConfig | undefined;
  addressFormGroupState = new FormGroup({});

  ngOnInit(): void {
    this.addressConfig = this.componentConfig.get(ComponentType.address);
    if (this.addressConfig) {
      this.formGroupState.addControl(this.addressConfig.name, this.addressFormGroupState);
      FormActionComponent.initControl(this.addressConfig, this.addressFormGroupState);
    }
  }

}
