import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { User } from '../user-interface';
import { MatDialog } from '@angular/material/dialog';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';
import { CreateUserDialogComponent } from '../../create-user-form/create-user-dialog/create-user-dialog.component';
import { DeleteUserConfirmationComponent } from '../delete-user-confirmation/delete-user-confirmation.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { customUpperCasePipe } from '../../../../pipes/upper-case.pipe';
import { redDirective } from '../../../../directives/red.directive';
import { shadowDirective } from '../../../../directives/shadow.directive';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
  standalone: true,
  imports: [
    MatSnackBarModule,
    MatCardModule,
    customUpperCasePipe,
    redDirective,
    shadowDirective
  ],
})
export class UserCardComponent {
  constructor(public confirmationDialog: MatDialog) {}

  @Input()
  user!: User;

  @Output()
  deleteUser = new EventEmitter();

  @Output()
  createUser = new EventEmitter();

  @Output()
  editUser = new EventEmitter();

  onDeleteUser(userId: number) {
    this.deleteUser.emit(userId);
  }

  deleteUserDialog(): void {
    this.confirmationDialog
      .open(DeleteUserConfirmationComponent, {
        data: `Do you want to delete user?`,
      })
      .afterClosed()
      .subscribe((confirmation: Boolean) => {
        if (confirmation) {
          this.onDeleteUser(this.user.id);
          alert('User is deleted');
        }
      });
  }

  readonly dialog = inject(MatDialog);

  editUserDialog(): void {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      data: { user: this.user },
    });

    dialogRef.afterClosed().subscribe((editResult: User) => {
      if (editResult) {
        this.editUser.emit(editResult);
        this.openSnackBar();
      }
    });
  }

  readonly snackBar = inject(MatSnackBar);

  openSnackBar(): void {
    this.snackBar.open('Пользователь редактирован🐒', 'Закрыть', {
      duration: 2000,
    });
  }
}
