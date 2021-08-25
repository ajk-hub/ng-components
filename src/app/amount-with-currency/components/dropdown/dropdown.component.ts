import {Component, Input} from '@angular/core';
import {FormControlStateComponent} from '../../../shared/form-control-state.component';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent extends FormControlStateComponent {

  @Input() items: string[] = [];

}
