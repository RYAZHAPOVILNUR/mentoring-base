import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface UserRole {
    name: string,
    email: string,
    isAdmin: boolean | null 
}

@Injectable({providedIn: "root"})
export class UserService {
    private user: UserRole = {
        name: 'Venera',
        email: 'gva@mail.ru',
        isAdmin: null
    }

    private readonly userSubject$ = new BehaviorSubject<UserRole | null>(null);
    public user$ = this.userSubject$.asObservable();

    public loginAsAdmin() {
        this.userSubject$.next({...this.user, isAdmin: true})
        console.log('admin')
        console.log(this.userSubject$)
    }

    public loginAsUser() {
        this.userSubject$.next({...this.user, isAdmin: false})
        console.log('user')
    }

    get isAdmin() {
        return this.userSubject$.value?.isAdmin
    }

    public logout() {
        this.userSubject$.next(null)
        console.log('вы вышли')
        console.log(this.userSubject$)
    }
}