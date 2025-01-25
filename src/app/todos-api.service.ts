import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './interfaces/todo.interface';

@Injectable({ providedIn: 'root' })
export class TodosApiService {
  private http = inject(HttpClient);

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(
      'https://jsonplaceholder.typicode.com/todos?_start=0&_limit=15'
    );
  }
}
