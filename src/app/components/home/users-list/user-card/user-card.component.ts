import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import { User } from '../user-interface';
import { MatDialog } from '@angular/material/dialog';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';
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
    shadowDirective,
  ],
})
export class UserCardComponent {
  private readonly confirmationDialog = inject(MatDialog);

  @Input()
  user!: User;

  @Output()
  deleteUser = new EventEmitter();

  @Output()
  createUser = new EventEmitter();

  @Output()
  editUser = new EventEmitter();

  private onDeleteUser(userId: number) {
    this.deleteUser.emit(userId);
  }

  public deleteUserDialog() {
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

  private readonly dialog = inject(MatDialog);

  public editUserDialog(): void {
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

  private readonly snackBar = inject(MatSnackBar);

  private openSnackBar(): void {
    this.snackBar.open('Пользователь редактирован🐒', 'Закрыть', {
      duration: 2000,
    });
  }
}



// function deleteUserDialog() {
//   throw new Error('Function not implemented.');
// }
