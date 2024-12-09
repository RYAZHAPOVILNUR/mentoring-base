import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UsersApiService } from '../servises/users-api.servise';
import { UserCardComponent } from './user-card/user-card.component';
import { IUser } from '../Interfaces/user.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { UserAddButtonComponent } from './user-add-button/user-add-button.component';
import { Store } from '@ngrx/store';
import { UsersActions } from './store/users.actions';
import { selectUsers } from './store/users.selectors';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  standalone: true,
  imports: [
    NgFor,
    UserCardComponent,
    AsyncPipe,
    MatDialogModule,
    UserAddButtonComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  readonly usersApiService = inject(UsersApiService);
  private snackBar = inject(MatSnackBar);
  readonly dialog = inject(MatDialog);
  private readonly store = inject(Store);
  public readonly users$ = this.store.select(selectUsers);

  constructor() {
    this.usersApiService.getUsers().subscribe((response: IUser[]) => {
      this.store.dispatch(UsersActions.set({ users: response }));
    });
  }

  public deleteUser(id: number) {
    this.store.dispatch(UsersActions.delete({ id }));
    
  }
  public createUser(user: IUser) {
    const newUser = {
      id: new Date().getTime(),
      name: user.name,
      email: user.email,
      website: user.website,
      company: {
        name: user.company.name,
      },
      phone: user.phone,
    };
    this.store.dispatch(UsersActions.create({ user: newUser }));
    this.snackBar.open('Новый пользователь создан', 'ok', {
      duration: 3000,
    });
    
  }

  public editUser(formDialogValue: IUser) {
    this.store.dispatch(UsersActions.edit({ user: formDialogValue }));
  }
}
