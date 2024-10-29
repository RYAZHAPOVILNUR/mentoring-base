import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import {Injectable} from "@angular/core";

@Injectable()
export class usersApiService{
    readonly apiService = inject(HttpClient);
    getUsers(){
        return this.apiService.get('https://jsonplaceholder.typicode.com/users');
    }
}