import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { User } from "./users-list/user-interface";
import { Observable } from "rxjs/internal/Observable";

@Injectable({providedIn: "root"})
export class UsersApiService {
  readonly apiServise = inject(HttpClient);

  getUsers(): Observable<User[]> {
    return this.apiServise.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }
}
