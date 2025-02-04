import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "./users-list/user-interface";

@Injectable({providedIn: 'root'})
export class UsersApiService {
  readonly apiService = inject(HttpClient);

  getUsers(): Observable<User[]> {
    return this.apiService.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }
}
