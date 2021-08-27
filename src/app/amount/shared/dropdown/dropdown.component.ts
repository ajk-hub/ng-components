import {Component, Input} from '@angular/core';
import {FormControlStateComponent} from '../form-control-state.component';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent extends FormControlStateComponent {

  @Input() items: string[] = [];

}
