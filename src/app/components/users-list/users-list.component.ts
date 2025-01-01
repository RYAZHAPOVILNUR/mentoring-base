import { NgFor, NgIf } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";

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
    imports:[NgFor, NgIf],

  })
export class UsersListComponent {
readonly apiService = inject(HttpClient);
users : User[] = [];

constructor () {
  this.apiService.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe(
  (response : User[]) => {
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

