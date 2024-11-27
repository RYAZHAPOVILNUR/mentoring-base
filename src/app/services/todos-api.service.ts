import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Todo } from "../interfaces/todo-interface";

@Injectable ({providedIn:'root'})
export class TodosApiService {
  readonly apiService = inject(HttpClient)

  getTodos(): Observable<Todo[]> {
    return this.apiService.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
  }
}