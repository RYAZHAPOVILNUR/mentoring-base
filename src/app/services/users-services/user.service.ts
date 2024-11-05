import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserState } from '../../interfaces/user-interfaces';

@Injectable({ providedIn: 'root' })
export class UserService {
  private userSubject$ = new BehaviorSubject<{ user: UserState | null }>({
    user: null,
  });

  public isLogged(): boolean {
    return this.userSubject$.value.user!== null;
  }

  public loginAsAdmin(name: string, email: string) {
    this.userSubject$.next({ user: { name, email, isAdmin: true } });
  }

  public loginAsUser(name: string, email: string) {
    this.userSubject$.next({ user: { name, email, isAdmin: false } });
  }

  public isAdmin(): boolean {
    return this.userSubject$.value.user?.isAdmin?? false;
  }

  public getUser(): UserState | null {
    return this.userSubject$.value.user;
  }

  public logout() {
   this.userSubject$.next({ user: null });
  }

  public getUserObservable(): Observable<{ user: UserState | null }> {
    return this.userSubject$.asObservable();
  }
}