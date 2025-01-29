import { NgFor } from "@angular/common";
import { Component, inject } from "@angular/core";
import { UsersApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";
import { AsyncPipe } from "@angular/common";
import { UsersService } from "../users.service";
import { ChangeDetectionStrategy } from "@angular/core";
import { CreateUserFormComponent } from "../create-user-form/create-user-form.component";
import { MatButtonModule } from "@angular/material/button";

export interface User {
  "id": number,
  "name": string,
  "username"?: string,
  "email": string,
  "address"?: {
      "street": string,
      "suite": string,
      "city": string,
      "zipcode": number,
      "geo": {
          "lat": string,
          "lng": string
    }
  },
  "phone"?: number,
  "website": string,
  "company": {
      "name": string,
      "catchPhrase"?: string,
      "bs"?: string
  }
}

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    standalone:true,
    imports: [NgFor, UserCardComponent, AsyncPipe, CreateUserFormComponent, MatButtonModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class UsersListComponent {
    readonly usersApiService = inject(UsersApiService)
    readonly usersService = inject(UsersService)

    constructor() {
        this.usersApiService.getUsers().subscribe(
            (response: any) => {
                this.usersService.setUsers(response);
            }
        );
    }

    deleteUser(id: number) {
        this.usersService.deleteUser(id);
    }

    public createUser(formData: any) {
      this.usersService.createUser({
        id: new Date().getTime(),
        name: formData.name,
        email: formData.email,
        website: formData.website,
        company: {
          name: formData.companyName,
        }
      });

      console.log('Данные формы: ', event);
    };

    getTodosAuthor(id: number) {

    }
}
