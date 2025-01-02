import { NgFor, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditUserDialogComponent } from '../edit-user-dialog.component.ts/edit-user-dialog.component';
import { DeleteUserDialogComponent } from './delete-user-dialog/delete-user-dialog.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { User } from '../users-list.component';
import { CustomUpperCasePipe } from '../../pipes/upper-case.pipe';
import { DeleteLinePipe } from '../../pipes/delete-lines.pipe';
import { RedDirective } from '../../directives/red.directive';
import { ShadowDirective } from '../../directives/shadow-user-card.directive';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
  standalone: true,
  imports: [MatSnackBarModule, UpperCasePipe, CustomUpperCasePipe, DeleteLinePipe, RedDirective, ShadowDirective, MatButtonModule],
})
export class UserCardComponent {
  @Input()
  userCard!: User;

  @Output()
  deleteUserCard = new EventEmitter();

  @Output()
  editUser = new EventEmitter();

  readonly dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);

  openDialog(): void {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      data: { userCard: this.userCard },
    });

    dialogRef.afterClosed().subscribe((editResult) => {
      if (editResult) {
        this.editUser.emit(editResult);
        this.snackBar.open('Пользователь изменен!', 'OK', {
          duration: 3000,
        });
      }
    });
  }

  openDialogDelete(): void {
    const dialogRef = this.dialog.open(DeleteUserDialogComponent, {
      data: { userCard: this.userCard },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.snackBar.open('Пользователь удален!', 'OK', {
          duration: 3000,
        });
      }
    });
  }

  onDeleteUser(userCardId: number) {
    this.deleteUserCard.emit(userCardId);
  }
}
