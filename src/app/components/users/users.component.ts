import { AsyncPipe, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UsersApiService } from '../../users-api.service';
import { UserCardComponent } from './user-card/user-card.component';
import { User } from './user-interface';
import { UsersService } from '../../users.service';



@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NgFor, UserCardComponent, AsyncPipe],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent {
  readonly usersApiService = inject(UsersApiService);
  readonly usersService = inject(UsersService);
  users = this.usersService.users;

  constructor() {
    this.usersApiService.getUsers().subscribe(
      (response: User[]) => {
      this.usersService.setUsers(response);
      }
    )
      // this.usersService.usersSubject.subscribe(
      //   users => this.users = users
      // )
    }

  deleteUser(id: number) {
    this.usersService.deleteUser(id);
    };
  }

