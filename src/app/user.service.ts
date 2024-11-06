import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface User {
  isAdmin: boolean;
  name?: string;
  email?: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private userSubject$ = new BehaviorSubject<{ user: User | null }>({
    user: null,
  });
  userObj$ = this.userSubject$.asObservable();

  public loginAsAdmin() {
    this.userSubject$.next({ user: { isAdmin: true } });
  }

  public loginAsUser() {
    this.userSubject$.next({ user: { isAdmin: false } });
  }

  public isAdmin() {
    return this.userSubject$.value.user?.isAdmin;
  }

  public logout() {
    this.userSubject$.next({ user: null });
  }

  get isUserLogged() {
    return this.userSubject$.value.user ? true : false;
  }
}
