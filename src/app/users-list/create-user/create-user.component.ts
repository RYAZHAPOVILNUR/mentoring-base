import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserDialogComponent } from './create-user-dialog/create-user-dialog.component';
import { IUser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss',
  imports: [MatButtonModule, MatIconModule, MatCardModule],
  standalone: true,
})
export class CreateUserComponent {
  readonly dialog = inject(MatDialog);

  @Output()
  createUser = new EventEmitter<IUser>();

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateUserDialogComponent);

    dialogRef.afterClosed().subscribe((createdResult: IUser) => {
      if (createdResult) {
        this.createUser.emit(createdResult);
      }
    });
  }
}
