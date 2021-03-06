import {Component, Input} from '@angular/core';
import {GetUsers} from '../../../../types';
import {SelectableListDirective} from 'ngx-selectable-list';

@Component({
  selector: 'app-users-list',
  template: `
    <mat-list>
      <mat-list-item *ngFor="let user of users">
        <app-user-item [item]="user"
                       libSelectableItem></app-user-item>
      </mat-list-item>
    </mat-list>
    <ng-content *ngIf="selectableListDirective.selecting"></ng-content>
  `,
  styleUrls: ['users-list.component.scss'],
})
export class UsersListComponent {
  // tslint:disable-next-line:no-input-rename
  @Input('items')
  users: GetUsers.Users[];

  constructor(public selectableListDirective: SelectableListDirective) {}
}
