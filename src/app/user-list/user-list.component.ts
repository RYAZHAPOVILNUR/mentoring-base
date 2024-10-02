import { ChangeDetectionStrategy, Component, inject, Injectable } from "@angular/core";
import { AsyncPipe, NgFor} from '@angular/common';
import { UsersApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";
import { UserService } from "../user.service";
import { CreateUserFormComponent } from "../create-user-form/create-user-form.component";
import { User, CreateUser } from "../interfaces/user-interface";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, UserCardComponent, AsyncPipe,CreateUserFormComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UsersListComponent {
  readonly usersApiService = inject(UsersApiService);
  readonly usersService = inject(UserService);

  constructor() {
    this.usersApiService.getUsers().subscribe(
      (response: any) => {this.usersService.setUsers(response);
      }
    )
  }

  deleteUser (id: number) {
    this.usersService.deleteUser(id)
  }

  public createUser (formData: CreateUser) {
    this.usersService.createUser({
      id: new Date().getTime(),
      name: formData.name,
      email: formData.email,
      website: formData.website,
      company: {
        name: formData.companyName,
      },
    });
  }
}