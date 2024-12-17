import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from './components/users/user-interface';

@Injectable({ providedIn: 'root' })
export class UsersApiService {
  readonly apiservise = inject(HttpClient);
  getUsers() {
    return this.apiservise.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}

