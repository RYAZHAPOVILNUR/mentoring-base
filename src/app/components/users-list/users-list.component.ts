import { UsersApiService } from './../../users-api.service';
import { NgFor, NgIf } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { UserCardComponent } from './user-card/user-card.component';

export interface User {
  id:number;
  name : string;
  username : string;
  email : string;
  adress : {
    street : string;
    suite : string;
    city : string;
    zipcode : string;
    geo : {
      lat: string;
      lng : string;
    };
  };
  phone : string;
   website : string;
   company : {
    name : string;
    catchPharse : string;
    bs: string
   };
}

@Component({
    selector:'app-user-list',
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    standalone:true,
    imports:[NgFor, NgIf, UserCardComponent],
  })
export class UsersListComponent {
readonly usersApiService = inject(UsersApiService);
users : User[] = [];

constructor () {
this.usersApiService.getUsers().subscribe(
  (response : any) => {
    this.users = response;
}
  )
    }

deleteUser(id : number) {
this.users = this.users.filter(
  item => {
    if (id === item.id) {
      return false
    } else {
      return true;
    }
  }
)
    }
}

