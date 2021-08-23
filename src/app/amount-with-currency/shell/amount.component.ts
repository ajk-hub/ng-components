import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-amount',
  template: `
    <div class="container">
      <div class="input-group mt-3 mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">@</span>
        </div>

        <input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1">
      </div>

      <div class="input-group mt-3 mb-3">
        <input type="text" class="form-control"
               placeholder="Recipient's username"
               aria-label="Recipient's username with two button addons">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button">Button</button>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mt-3 mb-3">
          <app-amount-with-currency
            [id]="'amount_text'"
            [type]="'text'"
            [label]="'Amount'"
            [required]="true"
            [showError]="true"
          >
          </app-amount-with-currency>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mt-3 mb-3">
          <app-percentage-field
            [id]="'percentage_text'"
            [type]="'text'"
            [label]="'Percentage'"
            [required]="true"
            [showError]="true"
          >
          </app-percentage-field>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mt-3 mb-3">
          <app-currency-with-amount
            [id]="'currency_text'"
            [type]="'text'"
            [label]="'Currency'"
            [required]="true"
            [showError]="true"
          >
          </app-currency-with-amount>
        </div>
      </div>

    </div>
  `,
  styleUrls: ['./amount.component.scss']
})
export class AmountComponent {
  currencies = ['USD', 'JOD', 'KWD', 'NPR'];

  selectControl = new FormControl();

}
