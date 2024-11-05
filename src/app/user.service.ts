import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface User {
  isAdmin: boolean;
  isLogged: boolean;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private userSubject$ = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject$.asObservable();

  public loginAsAdmin() {
    this.userSubject$.next({ isAdmin: true, isLogged: true });
  }

  public loginAsUser() {
    this.userSubject$.next({ isAdmin: false, isLogged: true });
  }

  public isAdmin() {
    return this.userSubject$.value?.isAdmin;
  }

  public logout() {
    this.userSubject$.next(null);
  }
}
