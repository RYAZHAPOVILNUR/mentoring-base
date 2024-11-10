import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface IUser {
    name: string,
    email: string,
    isAdmin: boolean | null
}

@Injectable({ providedIn: 'root'})
export class UserService {
    private readonly userSubject$ = new BehaviorSubject<IUser | null>(null); //указываем дженерик тип
    public user$ = this.userSubject$.asObservable();

    private user: IUser = {
        name: 'Dima',
        email: 'dm@gmail.com',
        isAdmin: null
    }
    
    public loginAsAdmin() {
        this.userSubject$.next({...this.user, isAdmin: true});
        console.log('Залогинились как admin', this.userSubject$.value);
    }

    public loginAsUser() {
        this.userSubject$.next({...this.user, isAdmin: false });
        console.log('Залогинились как user', this.userSubject$.value)
    }

    get isAdmin() {
        return this.userSubject$.value?.isAdmin;
    }

    public logout() {
        this.userSubject$.next(null);
        console.log(this.userSubject$)
    }
}
