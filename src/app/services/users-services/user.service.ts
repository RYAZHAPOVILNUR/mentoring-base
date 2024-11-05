import { BehaviorSubject, Observable } from 'rxjs';
import { UserRole } from '../../interfaces/user-interfaces';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  private userSubject$ = new BehaviorSubject<{ user: UserRole | null }>({
   user: null,
  });

  public user$: Observable<{ user: UserRole | null }> =
    this.userSubject$.asObservable();

  public get isLogged(): boolean {
    return this.userSubject$.value.user !== null;
  }

  public loginAsAdmin(name: string, email: string) {
    this.userSubject$.next({ user: { name, email, isAdmin: true } });
  }

  public loginAsUser(name: string, email: string) {
    this.userSubject$.next({ user: { name, email, isAdmin: false } });
  }

  public get isAdmin(): boolean {
    return this.userSubject$.value.user?.isAdmin ?? false;
  }

  public logout() {
    this.userSubject$.next({ user: null });
  }
}