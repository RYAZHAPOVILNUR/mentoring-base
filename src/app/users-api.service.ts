import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { User } from "./users-list/users-list.interface";

@Injectable({providedIn: 'root'}) 
export class UsersApiService {
    readonly apiServis = inject(HttpClient);
    users: User[] = [];

    getUsers() {
        return this.apiServis.get<User []>('https://jsonplaceholder.typicode.com/users')
    }
}
