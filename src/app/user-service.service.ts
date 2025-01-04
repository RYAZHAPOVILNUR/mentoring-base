import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

export interface User {
  name: string;
  id: number;
  email?: string;
  phone?: string;
  username?: string;
  website?: string;
  address?: {
    city?: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly http = inject(HttpClient);

  public isShowLengthSubject = new BehaviorSubject<boolean>(true);
  isShowLength$ = this.isShowLengthSubject.asObservable(); //
  
  private parseSubject = new BehaviorSubject<boolean>(true);
  parse$ = this.parseSubject.asObservable(); //

  private isNotEmailGroupSubject = new BehaviorSubject<boolean>(true);
  isNotEmailGroup$ = this.isNotEmailGroupSubject.asObservable(); //

  private numberNineUser = new BehaviorSubject<boolean>(true);
  numberNine$ = this.numberNineUser.asObservable(); //

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  deleteUser(id: number, users: User[]) {
    return users = users.filter(user => user.id !== id);
  }

  doPurse() {
    this.parseSubject.next(!this.parseSubject.value);
    this.isShowLengthSubject.next(true);
    console.log(this.parseSubject.value);
  }

  getAllEmails() {
    this.isNotEmailGroupSubject.next(!this.isNotEmailGroupSubject.value);
  }

  getNineUser(n: number, users: User[], isAllUser: boolean) {
    if (isAllUser) {
      return this.getUsers();
    } else {
      const filteredUsers = users.filter(user => user.id == n);
      return of(filteredUsers);
    }
  }

  getUsersCity(city: string, users: User[], showCity: boolean) {
    if (!showCity) {
      return this.getUsers();
    } else {
      const filteredUsers = users.filter(user => user.address?.city == city);
      return of(filteredUsers);
    }
  }

  getFiveUsers(n: number, users: User[], isAllUser: boolean) {
    if (!isAllUser) {
      return this.getUsers();
    } else {
      const filteredUsers = users.filter(user => user.id <= n);
      return of(filteredUsers);
    }
  }

  getReversUsers(users: User[], isAllUser: boolean) {
    if (!isAllUser) {
      return this.getUsers();
    } else {
      const filteredUsers = users.reverse();
      return of(filteredUsers);
    }
  }

  purseLowerUsername(users: User[], isAllUser: boolean) {
    if (!isAllUser) {
      return this.getUsers();
    } else {
      const filteredUsers = users.map(user => ({
        ...user,
        username: user.username!.toLowerCase()
      }));
      return of(filteredUsers);
    }
  }

  getComUsers(domen: string, users: User[], isAllUser: boolean) {
    if (!isAllUser) {
      return this.getUsers();
    } else {
      const filteredUsers = users.filter((user) => {
       console.log(user.email); 
       return user.website!.endsWith(domen)
      });
      return of(filteredUsers);
    }
  }

  getLengthUsername(length: number, users: User[], isAllUser: boolean) {
    if (!isAllUser) {
      return this.getUsers();
    } else {
      const filteredUsers = users.filter(user => user.username!.length > length);
      return of(filteredUsers);
    }
  }

}
