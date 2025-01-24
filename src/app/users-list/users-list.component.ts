import { NgFor } from "@angular/common";
import { Component, inject } from "@angular/core";
import { UsersApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }

@Component({
    selector: 'app-users-list',
    standalone: true,
    imports: [NgFor, UserCardComponent],
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss']
})


export class UsersListComponent{
  readonly usersApiServise = inject(UsersApiService);
    users: User[] =[];

    constructor() {
        this.usersApiServise.getUsers().subscribe(
          (response: User[]) => {
                this.users = response;
            });
    }
    
    

    deleteUser(id: number) {
        this.users = this.users.filter(
            user => {
                return id === user.id ? false : true;
            }
        )
    }

}