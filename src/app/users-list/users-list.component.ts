import {Component, inject} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {NgFor} from "@angular/common";

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

@Component({
  imports:[NgFor],
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  standalone: true,
})
export class UsersListComponent {
  readonly  apiService = inject(HttpClient);
  users: User[] = []
  constructor() {
    this.apiService.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe( res => this.users = res);
    console.log(this.users)
  }
  deleteUser(id: number){
    this.users = this.users.filter((user) =>  user.id !== id)
  }
}
