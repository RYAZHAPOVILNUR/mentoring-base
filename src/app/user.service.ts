import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IUser {
  name: string,
  email: string,
  isAdmin: boolean | null,

}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly  userSubject$ = new BehaviorSubject<IUser | null>(null)
  public readonly users$ = this.userSubject$.asObservable()

  private user: IUser = {
    name: 'Ильнур',
    email: 'Ряжапов',
    isAdmin: null,
  }

  loginAsAdmin() {
    this.userSubject$.next({...this.user, isAdmin: true});
    console.log('Вошли как админ');
  }
  loginAsUser() {
    this.userSubject$.next({...this.user, isAdmin: false});
    console.log('Вошли как пользователь');
  }
  get isAdmin() {
    return this.userSubject$.value?.isAdmin;
  }
  logout() {
    this.userSubject$.next(null);
  }
}

