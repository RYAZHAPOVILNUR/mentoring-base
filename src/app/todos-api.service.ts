import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class TodosApiService {
    readonly todosApiService = inject(HttpClient);

    getTodos() {
        return this.todosApiService.get('https://jsonplaceholder.typicode.com/todos')
    }
}