import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { User } from './../../interfaces/user-interface';
import { MatDialog } from '@angular/material/dialog';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';
import { DeleteUserDialogComponent } from '../delete-user-dialog/delete-user-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user-card',
  standalone: true,
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
  imports: [MatButtonModule, MatCardModule, MatIconModule],
})
export class UserCardComponent {
  readonly dialog = inject(MatDialog);

  @Input()
  user: User;

  @Output()
  deleteUser = new EventEmitter();

  @Output()
  editUser = new EventEmitter();

  onDeleteUser(id: number) {
    this.deleteUser.emit(id);
  }

  openDeleteUserDialog(): void {
    const dialogRef = this.dialog.open(DeleteUserDialogComponent, {
      data: { user: this.user },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        this.deleteUser.emit(result);
      }
    });
  }

  openEditUserDialog(): void {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      data: { user: this.user },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (
        result &&
        (result.name !== this.user.name ||
          result.email !== this.user.email ||
          result.website !== this.user.website ||
          result.company.name !== this.user.company.name)
      )
        this.editUser.emit(result);
    });
  }
}
