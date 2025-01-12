import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from './user-list/user-list.component';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
  private apiService = inject(HttpClient)

  getUsers(){
    return this.apiService.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }
}
