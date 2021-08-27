import {Component} from '@angular/core';

@Component({
  template: `
    <div class="row">

      <div class="col-md-4 mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Form Sample</h5>
            <a routerLink="/form-sample" class="btn btn-primary">Check it out...</a>
          </div>
        </div>
      </div>

      <div class="col-md-4 mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Amount With Currency</h5>
            <a routerLink="/amount" class="btn btn-primary">Check it out...</a>
          </div>
        </div>
      </div>

      <div class="col-md-4 mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Amount With Currency Sample</h5>
            <a routerLink="/amount/sample" class="btn btn-primary">Check it out...</a>
          </div>
        </div>
      </div>

      <div class="col-md-4 mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Beneficiary Form</h5>
            <a routerLink="/beneficiary-form" class="btn btn-primary">Check it out...</a>
          </div>
        </div>
      </div>

    </div>
  `
})
export class LandingPageComponent {
}
