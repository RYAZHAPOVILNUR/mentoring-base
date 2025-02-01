import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserApiService } from '../users-api.service';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersService } from '../users.service';
import { CreateUserFormComponent } from '../create-user-form/create-user-form.component';
import { createUserI, User } from '../interfaces/user.interface';
import { ShadowDirective } from '../directives/shadow.directive';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  standalone: true,
  imports: [
    NgFor,
    UserCardComponent,
    AsyncPipe,
    CreateUserFormComponent,
    ShadowDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  readonly usersApiService = inject(UserApiService);
  readonly usersService: UsersService = inject(UsersService);
  public readonly usersList$ = this.usersService.usersList$;

  constructor() {
    this.usersApiService.getUsers().subscribe((response: User[]) => {
      this.usersService.setUsers(response);
    });

    this.usersService.usersList$.subscribe((users) => console.log(users));
  }

  deleteUser(id: number): void {
    this.usersService.deleteUser(id);
  }

  editUser(user: createUserI) {
    this.usersService.editUser(user);
  }

  public createUser(formData: createUserI) {
    this.usersService.createUser({
      id: new Date().getTime(),
      name: formData.name,
      email: formData.email,
      website: formData.website,
      company: {
        name: formData.company.name,
      },
    });
  }
}
