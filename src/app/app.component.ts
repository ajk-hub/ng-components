import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" routerLink="/home">NG-Components</a>

        <button class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" routerLink="form-sample">Form Sample</a>
            </li>
            <li>
              <div ngbDropdown>
                <a class="nav-link dropdown-toggle" id="amountNav" ngbDropdownToggle>Amount</a>
                <div ngbDropdownMenu aria-labelledby="amountNav">
                  <a ngbDropdownItem class="fs-15" routerLink="/amount">With Currency</a>
                  <a ngbDropdownItem class="fs-15" routerLink="/amount/sample">Currency Sample</a>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/beneficiary-form">Beneficiary Form</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">
      <div class="mt-3 mb-3">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent {
}
