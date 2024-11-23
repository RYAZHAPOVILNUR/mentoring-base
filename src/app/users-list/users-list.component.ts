import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CreateUser, User } from '../interfaces/user-interfaces';
import { UsersApiService } from '../services/users-services/users-api.service';
import { UserCardComponent } from './user-card/user-card.component';
import { CreateUserFormComponent } from '../create-user-form/create-user-form.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { UserActions } from './store/users.actions';
import { selectUsers } from './store/users.selectors';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    NgFor,
    UserCardComponent,
    AsyncPipe,
    CreateUserFormComponent,
  ],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent implements OnInit {
  readonly usersApiService = inject(UsersApiService);
  readonly dialog = inject(MatDialog);
  readonly snackBar = inject(MatSnackBar);
  private readonly store = inject(Store);
  public readonly users$ = this.store.select(selectUsers);

  ngOnInit(): void {
    this.loadUsers();
  }

  private loadUsers() {
    this.usersApiService.getUsers().subscribe((response: User[]) => {
      this.store.dispatch(UserActions.set({ users: response }));
    });
  }

  deleteUser(id: number) {
    this.store.dispatch(UserActions.delete({ id }));
  }

  editUser(user: User) {
    this.store.dispatch(UserActions.edit({ user }));
  }

  public createUser(formData: CreateUser) {
    const newUser: User = {
      id: new Date().getTime(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      website: formData.website,
      company: {
        name: formData.company.name,
      },
    };

    this.store.dispatch(UserActions.create({ user: newUser }));
    this.snackBar.open('Пользователь успешно создан!', 'Закрыть', { duration: 2000 });
  }
}