import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { User } from "./users-list/user";

@Injectable({providedIn: 'root'})
export class UsersApiService {
  readonly apiService = inject(HttpClient);

  getUsers(_user: User) {
    return this.apiService.get('https://jsonplaceholder.typicode.com/users');
  }
}
