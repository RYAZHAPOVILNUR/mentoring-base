import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { IUser } from '../../Interfaces/user.interface';
import { CreateUserDialogComponent } from '../user-dialog/create-user-dialog/create-user-dialog.component';

@Component({
  selector: 'app-user-add-button',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './user-add-button.component.html',
  styleUrl: './user-add-button.component.scss',
})
export class UserAddButtonComponent {
  @Output() createUser = new EventEmitter<IUser>();
  dialog = inject(MatDialog);

  openCreateDialog() {
    const dialogRef = this.dialog.open(CreateUserDialogComponent);

    dialogRef.afterClosed().subscribe((result: IUser) => {
      if (result) {
        this.createUser.emit(result);
      }
    });
  }
}
