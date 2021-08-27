import {Component, OnInit} from '@angular/core';
import {ComponentType, GroupConfig} from '../../beneficiary-config';
import {FormActionComponent} from '../../shared/form-action.component';
import {FormStateComponent} from '../../shared/form-state.component';
import {FormGroup} from '@angular/forms';
import {Optional} from '../../../utility/optional';

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
    Optional.of(this.addressConfig)
      .ifExist(ac => {
        this.formGroupState.addControl(ac.name, this.addressFormGroupState);
        FormActionComponent.initControl(ac, this.addressFormGroupState);
      });
  }

}
