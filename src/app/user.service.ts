import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserRole } from './interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: UserRole = {
    name: 'Khusein',
    email: 'khusein@gmail.com',
    isAdmin: null,
  };

  public readonly userSubject$ = new BehaviorSubject<UserRole | null>(null);
  public user$ = this.userSubject$.asObservable();

  public loginAsAdmin() {
    this.userSubject$.next({ ...this.user, isAdmin: true });
  }

  public loginAsUser() {
    this.userSubject$.next({ ...this.user, isAdmin: false });
  }

  public logOut() {
    this.userSubject$.next(null);
  }

  public isAdmin() {
    this.userSubject$.value?.isAdmin;
  }
}
