import { AsyncPipe, NgFor} from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, } from '@angular/core';
import { UsersApiService } from '../users-api.service.js';
import { UserCardComponent } from "./user-card/user-card.component";
import { UsersService } from '../users.service.js';
import { CreateUserFormComponent } from '../create-user-form/create-user-form.component.js';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [NgFor, UserCardComponent,AsyncPipe, CreateUserFormComponent],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class UsersListComponent {
  readonly usersApiService = inject(UsersApiService);
  usersService = inject(UsersService)
  
  deleteUser (id:number) {
    this.usersService.deleteUser(id)
  }

  createUser(form : any) {
    this.usersService.createUser({
      id: new Date().getTime(),
      name: form.name,
      email: form.email,
      website: form.website,
      company: {
        name: form.companyName
      }
    })
  }

  constructor() {
    this.usersApiService.getUsers().subscribe(
      (item) => this.usersService.setUsers(item),
    );
  }
}
