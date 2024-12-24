import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({providedIn: 'root'}) 
export class todosApiService {
    readonly apiService = inject(HttpClient); 

    getTodos() {
        return this.apiService.get('https://jsonplaceholder.typicode.com/todos')
    }
}