import {Component, inject} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {NgFor, NgIf} from "@angular/common";

interface IUser {
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
  selector: 'users-list',
  imports: [
    NgFor,
    NgIf,
  ],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  standalone: true
})
export class UsersListComponent {
  isInfoModelOpen: boolean = false;
  title: string = 'Users';
  readonly httpClient: HttpClient = inject(HttpClient);
  users: IUser[] = [];
  selectedUser: IUser|any = null;
  constructor() {
    this.httpClient.get<IUser[]>('https://jsonplaceholder.typicode.com/users').subscribe(
      (response: IUser[]) => {
        this.users = response;
        console.log("USERS: ", this.users);
      }
    );
  }

  deleteUser(id: number) {
    this.users = this.users.filter(
      item => item.id !== id
    );
  }

  openModal(id: number){
    this.selectedUser = this.users.find((user: IUser) => user.id === id);
    this.isInfoModelOpen = !this.isInfoModelOpen;
  }
  closeModal() {
    this.isInfoModelOpen = !this.isInfoModelOpen;
    this.selectedUser = null;
  }
}
