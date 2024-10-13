import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent {
  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      data: {user: this.user},
    });

    dialogRef.afterClosed().subscribe(editResult => {
      console.log('The dialog was closed. Result:', editResult);
      if (editResult) {
        this.editUser.emit(editResult)
      }
      
    });
  }

  @Input()
  user!: User;

  @Output()
  deleteUser = new EventEmitter();

  @Output()
  editUser = new EventEmitter();

  onDeleteUser(userID: number) {
    this.deleteUser.emit(userID);
  }
}
