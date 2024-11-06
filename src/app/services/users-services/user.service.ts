import { BehaviorSubject, Observable } from 'rxjs';
import { UserRole } from '../../interfaces/user-interfaces';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  private userSubject$ = new BehaviorSubject<UserRole | null>(null);
  public readonly user$ =this.userSubject$.asObservable();
    
  private user: UserRole = {
   name: 'Ильнур',
   email: 'ilnur@gmail.com',
   isAdmin: null,
  }

  public loginAsAdmin() {
    this.userSubject$.next({ ...this.user, isAdmin: true });
  }

  public loginAsUser() {
    this.userSubject$.next({ ...this.user, isAdmin: false });
  }

  public get isAdmin() {
    return this.userSubject$.value?.isAdmin;
  }

  public logout() {
    this.userSubject$.next(null);
  }
}