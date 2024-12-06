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
    console.log('Вошли как админ')
  }

  loginIsUser() {
    this.userSubject$.next({ ...this.user, isAdmin: false });
    console.log('Вошли как пользователь')
  }

  get isAdmin() {
    return this.userSubject$.value?.isAdmin;
  }

  logout() {
    this.userSubject$.next(null);
    console.log(this.userSubject$)
  }
}
