import {inject, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {UserGuard} from '../interfaces/user-interface';

@Injectable({ providedIn: 'root' })
export class AuthUserService {
  private readonly userSubject$ = new BehaviorSubject<UserGuard | null>(null);
  public readonly users$ = this.userSubject$.asObservable();
  private readonly router = inject(Router);

  private user: UserGuard = {
    name: 'Ilnur',
    email: 'Ryazhapov',
    isAdmin: null,
  };

  public loginAsAdmin(): void {
    this.userSubject$.next({ ...this.user, isAdmin: true });
  }

  public loginAsUser(): void {
    this.userSubject$.next({ ...this.user, isAdmin: false });
  }

   public get isAdmin() {
    return this.userSubject$.value?.isAdmin;
  }

  public logout(): void {
    this.userSubject$.next(null);
    this.router.navigate(['']);
    console.log(this.userSubject$.value);
  }
}
