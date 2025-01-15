import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class TodoApiService {
    readonly apiService = inject(HttpClient)

    getTodos() {
        return this.apiService.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
    }
}

export interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}