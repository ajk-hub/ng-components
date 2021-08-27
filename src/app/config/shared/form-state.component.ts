import {Component, Input} from '@angular/core';
import {ComponentType, GroupConfig} from '../beneficiary-config';
import {FormActionComponent} from './form-action.component';

@Component({template: ''})
export class FormStateComponent extends FormActionComponent {

  @Input() componentConfig: Map<ComponentType, GroupConfig> = new Map([]);

  public fieldLabel(config: GroupConfig, fieldName: string): string {
    const field = config.fields.find(f => f.name === fieldName);
    return field ? field.label : '';
  }

}
