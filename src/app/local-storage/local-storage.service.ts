import { Injectable } from '@angular/core';
import { User } from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root',
})
export class StorageService {

  getUsers(): User[] {
    const usersData = localStorage.getItem('userList');
    return usersData ? JSON.parse(usersData) : [];
  }

  saveUserList(users: User[]): void {
    localStorage.setItem('userList', JSON.stringify(users));
  }


  removeUserList(): void {
    localStorage.removeItem('userList');
  }
}