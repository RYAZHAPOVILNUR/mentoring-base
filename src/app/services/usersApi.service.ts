import {HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../interfaces/user-interface';

@Injectable({ providedIn: 'root' })
export class UsersApiService {
  http = inject(HttpClient);

  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }
}
