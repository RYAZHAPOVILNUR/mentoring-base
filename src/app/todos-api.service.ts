import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Todo } from "./todos-list/todos-interface";


@Injectable({providedIn: "root"})
export class TodosApiService {
  readonly apiServise = inject(HttpClient);

  getTodos(): Observable<Todo[]> {
    return this.apiServise.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
  }
}
