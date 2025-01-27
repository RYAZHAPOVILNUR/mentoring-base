import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Todo } from './components/todos/todo-interface';

@Injectable({ providedIn: 'root' })
export class TodosApiService {

  readonly apiservise = inject(HttpClient);
  todos: any;
  getTodos() {
    return this.apiservise.get<Todo[]>(
      'https://jsonplaceholder.typicode.com/todos'
    );
  }
}
