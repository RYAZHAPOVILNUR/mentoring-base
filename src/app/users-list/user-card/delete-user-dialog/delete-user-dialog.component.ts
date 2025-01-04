import { Component, Input, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { UsersActions } from '../../store/user.actions';

@Component({
  templateUrl: './delete-user-dialog.component.html',
  styleUrl: './delete-user-dialog.component.scss',
  standalone: true,
  imports: [MatDialogClose],
})
export class DeleteUserDialogComponent {
  readonly data = inject(MAT_DIALOG_DATA);
  store = inject(Store);

  deleteUser(res: number) {
    this.store.dispatch(UsersActions.delete({ id: res }));
  }
}
