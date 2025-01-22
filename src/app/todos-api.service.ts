import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Todo } from "./todos-list/todo-create";

@Injectable({providedIn: 'root'})
export class TodosApiService {
  readonly apiService = inject(HttpClient)

  getTodos(_todo: Todo) {
    return this.apiService.get('https://jsonplaceholder.typicode.com/todos')
  }
}
