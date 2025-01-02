import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Todo } from "./todo-list/todo-list.component";


@Injectable({providedIn: 'root'})
export class TodosApiService {
    readonly apiService = inject(HttpClient)

    getTodos() {
        return this.apiService.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
    }
}