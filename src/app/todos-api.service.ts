import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Todo } from "./todos-list/todos-list.interface";

@Injectable ({providedIn: 'root'})
export class TodosApiService {
    readonly apiServis = inject(HttpClient);
    todos: Todo [] = [];

    getTodos() {
        return this.apiServis.get<Todo []>('https://jsonplaceholder.typicode.com/todos')
    }
}