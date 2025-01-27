import { AsyncPipe, NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { UsersApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";
import { UsersService } from "../users.service";
import { CreateUserFormComponent } from "../create-user-form/create-user-form.component";
import { FormGroup } from "@angular/forms";

export interface User {
    id: number;
    name: string;
    username?: string;
    email: string;
    address?: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone?: string;
    website: string;
    company: {
      name: string;
      catchPhrase?: string;
      bs?: string;
    };
  }

@Component({
    selector: 'app-users-list',
    standalone: true,
    imports: [NgFor, UserCardComponent, AsyncPipe, CreateUserFormComponent],
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})


export class UsersListComponent{
  readonly usersApiServise = inject(UsersApiService);
  readonly usersService = inject(UsersService);

    constructor() {
        this.usersApiServise.getUsers().subscribe(
          (response: User[]) => {
                this.usersService.setUsers(response)
            });
    }


    public createUser(formData: СreateUser) {
      this.usersService.createUser({
        id: new Date().getTime(),
        name: formData.name,
        email: formData.email,
        website: formData.website,
        company: {
          name: formData.company.name
        }
      })
    }
    

    deleteUser(id: number) {
        this.usersService.deleteUser(id)
    }
}

export interface СreateUser {
  id: number;
  name: string;
  email: string;
  website: string;
  company: {
    name: string;
  };
}
