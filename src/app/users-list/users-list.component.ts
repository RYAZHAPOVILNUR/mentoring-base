import {ChangeDetectionStrategy, Component, inject} from "@angular/core";
import {AsyncPipe, NgFor} from "@angular/common";
import {UsersApiService} from "../users-api.service";
import {UserCardComponent} from "./user-card/user-card.component";
import {UsersService} from "../users.service";
import {CreateUserFormComponent} from "../create-user-form/create-user-form.component";
import {CreateUser, User} from "../interfaces/user-interface";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  standalone: true,
  styleUrl: './users-list.component.scss',
  imports: [NgFor, UserCardComponent, AsyncPipe, CreateUserFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UsersListComponent {
  readonly userApiService = inject(UsersApiService);
  readonly usersService = inject(UsersService);

  constructor() {
    this.userApiService.getUsers().subscribe(
      (response: User[]) => {
        this.usersService.setUsers(response);
      });

    this.usersService.users$.subscribe((users) => console.log(users));
  }
  deleteUser(id: number) {
    this.usersService.deleteUser(id);
  }

  public createUser(formData: CreateUser) {
    this.usersService.createUser({
      id: new Date().getTime(),
      name: formData.name,
      email: formData.email,
      website: formData.website,
      company: {
        name: formData.company.name,
      },
    });
    console.log('ДАННЫЕ ФОРМЫ: ', event);
    console.log(new Date().getTime());
  }

}
