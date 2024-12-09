import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../Interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class UsersApiService {
  readonly apiService = inject(HttpClient);

  getUsers(): Observable<IUser[]> {
    return this.apiService.get<IUser[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }
}
