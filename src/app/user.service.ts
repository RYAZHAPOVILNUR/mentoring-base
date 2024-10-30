import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  userSubject = new BehaviorSubject<{ isLogged: boolean; isAdmin: boolean }>({
    isLogged: false,
    isAdmin: false,
  });

  public loginAsAdmin() {
    this.userSubject.next({ isAdmin: true, isLogged: true });
  }

  public loginAsUser() {
    this.userSubject.next({ isAdmin: false, isLogged: true });
  }

  public isAdmin() {
    return this.userSubject.value.isAdmin;
  }

  public logout() {
    this.userSubject.next({ isAdmin: false, isLogged: false });
  }
}
