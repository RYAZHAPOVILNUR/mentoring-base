import { HttpClient } from "@angular/common/http";
import { inject, Inject, Injectable } from "@angular/core";
import { User } from "./models/User";
import { catchError, map } from "rxjs";


  

@Injectable({providedIn: "root"})

export class UsersApiSevice {

    readonly apiService = inject(HttpClient)

    getUsers() {
        return this.apiService.get<Array<User>>('https://jsonplaceholder.typicode.com/users')
    }
}

