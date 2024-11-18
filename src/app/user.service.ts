import { Injectable } from '@angular/core';
import { IAdminUser } from './interfaces/user.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private currentUserSubject$ = new BehaviorSubject<IAdminUser | null>(null);
  currentUser$: Observable<IAdminUser | null> =
    this.currentUserSubject$.asObservable();

  loginAsAdmin(): void {
    const adminUser: IAdminUser = { isAdmin: true };
    this.currentUserSubject$.next(adminUser);
  }

  loginAsUser(): void {
    const adminUser: IAdminUser = { isAdmin: false };
    this.currentUserSubject$.next(adminUser);
  }

  getCurrentUser(): IAdminUser | null {
    return this.currentUserSubject$.getValue();
  }

  clearUser(): void {
    return this.currentUserSubject$.next(null);
  }

  isAdmin(): boolean {
    const currentUser = this.getCurrentUser();
    return currentUser?.isAdmin === true;
  }
}
