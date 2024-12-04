import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UsersApiService } from '../users-api.service';
import { UserCardComponent } from './user-card/user-card.component';
import { CreateUserFormComponent } from '../create-user-form/create-user-form.component';
import { CreateUser, User } from '../interfaces/user-interface';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserDialogComponent } from './create-user-dialog/create-user-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BoxShadowDirective } from '../directives/box-shadow.directive';
import { Store } from '@ngrx/store';
import { UsersActions } from './store/users.actions';
import { selectUsers } from './store/users.selectors';

@Component({
  selector: 'app-users-list',
  standalone: true,
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  imports: [
    NgFor,
    UserCardComponent,
    AsyncPipe,
    CreateUserFormComponent,
    MatButtonModule,
    MatIconModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  private _snackBar = inject(MatSnackBar);
  readonly dialog = inject(MatDialog);
  private readonly store = inject(Store);
  public readonly users$ = this.store.select(selectUsers);

  private openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 3000 });
  }

  public deleteUser(id: number) {
    this.store.dispatch(UsersActions.delete({ id }));
  }

  public createUser(formData: CreateUser) {
    this.store.dispatch(
      UsersActions.create({
        user: {
          ...formData,
          id: Date.now(),
        },
      })
    );
  }

  public editUser(user: User) {
    this.store.dispatch(UsersActions.edit({ user }));
  }

  public openCreateUserDialog(): void {
    const dialogRef = this.dialog.open(CreateUserDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.createUser(result);
        this.openSnackBar('Юзер создан!', 'ОК');
      } else {
        this.openSnackBar('Создание юзера отменено', '');
      }
    });
  }

  ngOnInit() {
    this.store.dispatch(UsersActions.load({ users: [] }));
  }
}
