import { Injectable } from '@angular/core';
import { IUserRole } from './interfaces/user.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly currentUserSubject$ = new BehaviorSubject<IUserRole | null>(
    null
  );
  public readonly currentUser$: Observable<IUserRole | null> =
    this.currentUserSubject$.asObservable();

  private currentUser: IUserRole = {
    name: 'Жансауле',
    email: 'zhansaule@gmail.com',
    isAdmin: null,
  };

  loginAsAdmin(): void {
    this.currentUserSubject$.next({ ...this.currentUser, isAdmin: true });
  }

  loginAsUser(): void {
    this.currentUserSubject$.next({ ...this.currentUser, isAdmin: false });
  }

  logout(): void {
    return this.currentUserSubject$.next(null);
  }

  get isAdmin() {
    return this.currentUserSubject$.value?.isAdmin;
  }
}
