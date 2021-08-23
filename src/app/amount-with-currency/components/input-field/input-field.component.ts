import {Component, Input, TemplateRef} from '@angular/core';
import {FormControlSharedComponent} from '../shared/component';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent extends FormControlSharedComponent {

  @Input() inputParentClassStyle = '';
  @Input() rightButtonLabel = '';
  @Input() leftTemplate: TemplateRef<any> | undefined;
  @Input() rightTemplate: TemplateRef<any> | undefined;

}
