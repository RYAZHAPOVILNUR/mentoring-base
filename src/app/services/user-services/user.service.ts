import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

export interface UserRole {
  name: string;
  email: string;
  isAdmin: boolean | null;
}

@Injectable({
  providedIn: 'root'
})


export class UserService {
  private readonly userSubject$ = new BehaviorSubject<UserRole | null>(null); // Оно хранит текущее состояние пользователя (IUser или null). Изначально значение null.

  public readonly user$ = this.userSubject$.asObservable();

  private user: UserRole = {
    name: 'anuar',
    email: 'anuar@gmail.com',
    isAdmin: null,
  }

  public loginAsAdmin() { // Метод для логина как администратор.
    this.userSubject$.next({...this.user, isAdmin: true}); // Обновляет состояние пользователя и устанавливает isAdmin в true.
  }

  public loginAsUser() { // Метод для логина как обычный пользователь.
    this.userSubject$.next({...this.user, isAdmin: false}); // Обновляет состояние пользователя и устанавливает isAdmin в false.
  }

  public get isAdmin() { // Геттер для получения текущего статуса администратора.
    return this.userSubject$.value?.isAdmin; // Возвращает значение isAdmin из текущего состояния пользователя.
  }

  public logout() { // Метод для разлогина.
    this.userSubject$.next(null); // Сбрасывает состояние пользователя до null, что означает, что пользователь не авторизован.
  }
}

