import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IUser } from "../interfaces/user";

@Injectable({providedIn: 'root'})
export class UsersApiService {
  readonly apiService = inject(HttpClient);

  getUsers() {
    return this.apiService.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
  }
  }

