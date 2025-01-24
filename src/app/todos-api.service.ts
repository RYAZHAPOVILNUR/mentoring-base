import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Todo } from "./todo-card/todos-interface";

@Injectable({providedIn: 'root'})
export class TodoApiService {
    readonly apiService = inject(HttpClient)

    getTodos() {
        return this.apiService.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
    }
}