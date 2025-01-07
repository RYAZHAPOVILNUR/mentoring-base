import { UsersService } from './../../users.service';
import { UsersApiService } from './../../users-api.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserCardComponent } from './user-card/user-card.component';
import { TodosApiService } from './../../todos-api.service';
import { User } from '../../Interfaces/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  standalone: true,
  imports: [NgFor, UserCardComponent, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  readonly usersApiService = inject(UsersApiService);
  usersService = inject(UsersService);
  users: User[] = [];
  deleteUser(id: number) {
    this.usersService.deleteUser(id);
  }

  constructor() {
    this.usersApiService
      .getUsers()
      .subscribe((response: any) => this.usersService.setUsers(response));
  }
}
