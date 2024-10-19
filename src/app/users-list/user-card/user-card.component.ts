import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { User } from '../../interfaces/user.interface';
import { CreateEditUserDialogComponent } from '../create-edit-user-dialog/create-edit-user-dialog.component';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent {
  @Input()
  user!: User;

  @Output()
  deleteUser = new EventEmitter();

  @Output()
  editUser = new EventEmitter();

  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateEditUserDialogComponent, {
      data: {user: this.user, isEdit: true},
    });

    dialogRef.afterClosed().subscribe(editResult => {
      console.log('The dialog was closed. Result:', editResult);
      if (editResult) {
        this.editUser.emit(editResult)
      }
      
    });
  }

  onDeleteUser(userID: number) {
    this.deleteUser.emit(userID);
  }
}
