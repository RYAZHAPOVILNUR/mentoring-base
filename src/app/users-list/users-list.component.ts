import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UsersApiService } from '../users-api.service';
import { UserCardComponent } from './user-card/user-card.component';
import { CreateUser, IUser } from '../interfaces/user.interface';
import { CreateUserComponent } from './create-user/create-user.component';
import { MatCardModule } from '@angular/material/card';
import { ShadowDirective } from '../directives/shadow.directive';
import { Store } from '@ngrx/store';
import { UserActions } from './store/users.actions';
import { selectUsers } from './store/users.selectors';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: 'users-list.component.scss',
  standalone: true,
  imports: [
    NgFor,
    UserCardComponent,
    AsyncPipe,
    CreateUserComponent,
    MatCardModule,
    ShadowDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  readonly usersApiService = inject(UsersApiService);
  private readonly store = inject(Store);
  public readonly users$ = this.store.select(selectUsers);

  constructor() {
    this.usersApiService.getUsers().subscribe((response) => {
      this.store.dispatch(UserActions.set({ users: response }));
    });
  }

  deleteUser(id: number) {
    this.store.dispatch(UserActions.delete({ id }));
  }

  createUser(formData: CreateUser) {
    this.store.dispatch(
      UserActions.create({
        user: {
          id: new Date().getTime(),
          name: formData.name,
          email: formData.email,
          website: formData.website,
          phone: formData.phone,
          company: {
            name: formData.company.name,
          },
        },
      })
    );
  }

  editUser(user: IUser) {
    this.store.dispatch(UserActions.edit({ user }));
  }
}
