import { Component, Input, inject } from '@angular/core';
import { UsersService } from '../../../users.service';
import { MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';

@Component({
  templateUrl: './delete-user-dialog.component.html',
  styleUrl: './delete-user-dialog.component.scss',
  standalone: true,
  imports: [MatDialogClose]
})
export class DeleteUserDialogComponent {
  readonly usersService = inject(UsersService);
  readonly data = inject(MAT_DIALOG_DATA);

  deleteUser(res: any) {
    this.usersService.deleteUser(res);
  }
}
