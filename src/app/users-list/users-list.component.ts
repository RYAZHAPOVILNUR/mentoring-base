import {Component, inject} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {NgFor, NgIf} from "@angular/common";

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
  users: any = [];
  selectedUser: any = null;
  constructor() {
    this.httpClient.get<any>('https://jsonplaceholder.typicode.com/users').subscribe(
      (response: any) => {
        this.users = response;
        console.log("USERS: ", this.users);
      }
    );
  }

  deleteUser(id: number) {
    this.users = this.users.filter(
      // @ts-ignore
      item => item.id !== id
    );
  }

  openModal(id: number){
    this.selectedUser = this.users.find((user: any) => user.id === id);
    this.isInfoModelOpen = !this.isInfoModelOpen;
  }
  closeModal() {
    this.isInfoModelOpen = !this.isInfoModelOpen;
    this.selectedUser = null;
  }
}
