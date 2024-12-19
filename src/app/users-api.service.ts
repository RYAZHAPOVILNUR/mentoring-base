import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({providedIn: "root"})
export class UsersApiService {
  readonly apiServise = inject(HttpClient);

  getUsers() {
    return this.apiServise.get('https://jsonplaceholder.typicode.com/users')
  }
}
