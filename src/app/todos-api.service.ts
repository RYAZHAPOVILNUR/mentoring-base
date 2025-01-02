import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Todo } from './todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodosApiService {
  readonly todosUsersApiService = inject(HttpClient);

  getTodos () {
    return this.todosUsersApiService.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
