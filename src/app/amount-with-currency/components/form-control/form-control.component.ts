import {Component} from '@angular/core';
import {FormControlSharedComponent} from '../shared/component';
import {ValidationErrors} from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent extends FormControlSharedComponent {

  shouldDisplayErrorMessage(): boolean {
    return true;
  }

  validationErrors(): ValidationErrors[] {
    return [];
  }

}
