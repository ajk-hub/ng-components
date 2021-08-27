import {Component} from '@angular/core';

@Component({
  selector: 'app-group-container',
  template: `
    <div class="card">
      <div class="card-body">
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class GroupContainerComponent {
}
