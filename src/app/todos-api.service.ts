import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Todo } from "./todos-list/todos-list.component";
import { map } from "rxjs";



@Injectable({providedIn: 'root'})
export class TodosApiService {
 readonly apiService = inject(HttpClient);

   getTodos() {
    return this.apiService.get<Todo[]> ('https://jsonplaceholder.typicode.com/todos')
    .pipe(map((todos: Todo[]) => todos.slice(0, 10)))
   }
}