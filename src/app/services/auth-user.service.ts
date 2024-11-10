import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

export interface User {
  name: string;
  email: string;
  isAdmin: boolean | null;
}

@Injectable({ providedIn: 'root' })
export class AuthUserService {
  private readonly userSubject$ = new BehaviorSubject<User | null>(null);
  public readonly users$ = this.userSubject$.asObservable();
  private readonly router = inject(Router);

  private user: User = {
    name: 'Ilnur',
    email: 'Ryazhapov',
    isAdmin: null,
  };

  public loginAsAdmin(): void {
    this.userSubject$.next({ ...this.user, isAdmin: true });
    localStorage.setItem('user', JSON.stringify(this.userSubject$.value));
    localStorage.setItem('role', 'admin');
    localStorage.setItem('token', 'admin-token');
  }

  public loginAsUser(): void {
    this.userSubject$.next({ ...this.user, isAdmin: false });
    localStorage.setItem('user', JSON.stringify(this.userSubject$.value));
    localStorage.setItem('role', 'user');
    localStorage.setItem('token', 'user-token');
  }

  get isAdmin() {
    return this.userSubject$.value?.isAdmin;
  }

  public logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    localStorage.removeItem('token');
    this.userSubject$.next(null);
    this.router.navigate(['']);
    console.log(this.userSubject$.value);
  }
}
