import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IUserRole {
  name: string;
  email: string;
  isAdmin: boolean | null;
}
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly userSubject$ = new BehaviorSubject<IUserRole | null>(null);
  public readonly user$ = this.userSubject$.asObservable();
  private user: IUserRole = {
    name: 'Ильнур',
    email: 'Front',
    isAdmin: null,
  };
  loginAsAdmin() {
    this.userSubject$.next({ ...this.user, isAdmin: true });
    console.log('вошли как админ')
  }
  loginAsUser() {
    this.userSubject$.next({ ...this.user, isAdmin: false });
    console.log('вошли как пользователь');
  }

  get isAdmin() {
    return this.userSubject$.value?.isAdmin;
  }
  logout() {
    this.userSubject$.next(null);
    console.log(this.userSubject$)
  }
  constructor() {}
}
