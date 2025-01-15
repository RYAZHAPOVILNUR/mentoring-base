import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Todo } from '../../interfaces/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodosApiService {
  private readonly apiService = inject(HttpClient);

  getTodos() {
    return this.apiService.get<Todo[]>(
      'https://jsonplaceholder.typicode.com/todos?_limit=12'
    );
  }
}
