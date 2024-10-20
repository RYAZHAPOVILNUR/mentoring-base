import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
} from '@angular/material/dialog';
import { User } from '../interfaces/user.interface';

@Component({
  selector: '',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions, MatDialogClose, MatButton],
  templateUrl: './delete-user-dialog.component.html',
  styleUrl: './delete-user-dialog.component.scss'
})
export class DeleteUserDialogComponent {
  @Output() deleteUser = new EventEmitter();

  readonly data = inject<{user: User}>(MAT_DIALOG_DATA);


}
