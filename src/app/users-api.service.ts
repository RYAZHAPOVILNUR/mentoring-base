import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class UserApiService {
    readonly apiService = inject(HttpClient);

    getUsers() {
        return this.apiService.get<User[]>('https://jsonplaceholder.typicode.com/users')
    }
}

export interface User {
    id: number;
    name: string;
    email: string;
    website: string;
    phone: number;
    company: {
        name: string;
    }
}