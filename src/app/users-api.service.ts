import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class usersApiService {
    readonly apiService = inject(HttpClient);
    getUsers() {
        return this.apiService.get('https://jsonplaceholder.typicode.com/users')
    }
}
class Test1 {
    field: number;
    field2: number;

    constructor() {
        this.field = 10;
        this.field2 = 20;
    }
}

const newClasstest1 = new Test1()
newClasstest1.field