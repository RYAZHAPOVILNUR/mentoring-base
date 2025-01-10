import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UsersApiService } from '../users-api.service';
import { UserCardComponent } from './user-card/user-card.component';
import { UserService } from '../user.service';
import { CreateUserFormComponent } from '../create-user-form/create-user-form.component';
import { User } from '../interfaces/user.interface';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, UserCardComponent, AsyncPipe, MatButtonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {
  readonly usersApiService = inject(UsersApiService);
  readonly userService = inject(UserService);

  constructor(private readonly dialog: MatDialog) {
    this.usersApiService.getUsers().subscribe((users) => {
      this.userService.setUsers(users);
    });
  }

  createUser() {
    this.dialog
      .open(CreateUserFormComponent)
      .afterClosed()
      .subscribe((user: User) => {
        if (!user) return;
        this.userService.createUser({
          id: new Date().getTime(),
          name: user.name,
          email: user.email,
          website: user.website,
          company: {
            name: user.name,
          },
        });
      });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id);
  }
}
