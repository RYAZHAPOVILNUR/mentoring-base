import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IAdmin {
  name: string;
  email: string;
  isAdmin: boolean | null;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly userSubject$ = new BehaviorSubject<IAdmin | null>(null);
  public readonly user$ = this.userSubject$.asObservable();

  private user: IAdmin = {
    name: 'Ильнур',
    email: 'Ряжапов',
    isAdmin: null,
  };

  loginIsAdmin() {
    this.userSubject$.next({ ...this.user, isAdmin: true });
  }

  loginIsUser() {
    this.userSubject$.next({ ...this.user, isAdmin: false });
  }

  get isAdmin() {
    return this.userSubject$.value?.isAdmin;
  }

  logout() {
    this.userSubject$.next(null);
  }
}
