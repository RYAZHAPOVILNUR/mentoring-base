import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";


@Injectable({providedIn: 'root'})
export class TodosApiService {
    readonly apiService = inject(HttpClient)

    getTodos() {
        return this.apiService.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    }
}