import {Component} from '@angular/core';
import {FormControlStateComponent} from '../form-control-state.component';
import {ValidationErrors} from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent extends FormControlStateComponent {

  shouldDisplayErrorMessage(): boolean {
    return true;
  }

  validationErrors(): ValidationErrors[] {
    return [];
  }

}
