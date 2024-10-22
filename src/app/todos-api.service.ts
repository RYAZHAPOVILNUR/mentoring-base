import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ITodo } from './interfaces/todo.interface';

@Injectable({ providedIn: 'root' })
export class TodosApiService {
  readonly apiService = inject(HttpClient);

  getTodosList() {
    return this.apiService.get<ITodo[]>(
      'https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10'
    );
  }
}
