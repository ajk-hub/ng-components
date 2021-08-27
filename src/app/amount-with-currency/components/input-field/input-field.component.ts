import {Component, Input, TemplateRef} from '@angular/core';
import {FormControlStateComponent} from '../../../shared/form-control-state.component';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent extends FormControlStateComponent {

  @Input() inputContainerClassStyle = '';
  @Input() inputFieldClassStyle = '';

  @Input() rightButtonLabel = '';
  @Input() leftTemplate: TemplateRef<any> | undefined;
  @Input() rightTemplate: TemplateRef<any> | undefined;

}
