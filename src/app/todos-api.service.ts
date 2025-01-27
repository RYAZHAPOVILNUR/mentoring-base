import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Todo } from "./todos-list/todo-create";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class TodosApiService {
  readonly apiService = inject(HttpClient)

  getTodos() {
    return this.apiService.get('https://jsonplaceholder.typicode.com/todos') as Observable<Todo[]>
  }
}
