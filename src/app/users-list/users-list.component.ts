import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UsersApiService } from '../users-api.service';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersService } from '../users.service';
import { CreateUserDialogComponent } from './create-user/create-user-dialog/create-user-dialog.component';
import { CreateUser, IUser } from '../interfaces/user.interface';
import { CreateUserComponent } from './create-user/create-user.component';
import { MatCardModule } from '@angular/material/card';
import { ShadowDirective } from '../directives/shadow.directive';

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
    CreateUserDialogComponent,
    MatCardModule,
    ShadowDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  readonly usersApiService = inject(UsersApiService);
  readonly usersService = inject(UsersService);

  constructor() {
    this.usersApiService
      .getUsers()
      .subscribe((response) => this.usersService.setUsers(response));
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id);
  }

  createUser(formData: CreateUser) {
    this.usersService.createUser({
      id: new Date().getTime(),
      name: formData.name,
      email: formData.email,
      website: formData.website,
      phone: formData.phone,
      company: {
        name: formData.company.name,
      },
    });
  }

  editUser(user: IUser) {
    this.usersService.editUser({
      ...user,
      company: {
        name: user.company.name,
      },
    });
  }
}
