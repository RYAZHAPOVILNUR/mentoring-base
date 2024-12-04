import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class UsersApiService {
    readonly apiService = inject(HttpClient);

    getUsers() {
        return this.apiService.get('https://jsonplaceholder.typicode.com/users')
    }
}



class Test1 {
    field: number = 10;
    field2: number = 15;

    constructor() {
        this.field = 10;
        this.field2 = 15;
    }
}

const newClassTest1 = new Test1();

newClassTest1.field;