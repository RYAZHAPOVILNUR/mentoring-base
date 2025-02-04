import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })

export class TodosApiService {
    readonly todosApiService = inject(HttpClient)

    getTodos() {
        return this.todosApiService.get('https://jsonplaceholder.typicode.com/todos');
    }
}