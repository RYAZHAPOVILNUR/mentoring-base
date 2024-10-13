import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, take } from 'rxjs';
import { ToDOs } from '../interfaces/todo.interface';


@Injectable({
  providedIn: 'root',
})
export class ToDoApiService {
  readonly http = inject(HttpClient);

  getToDo(): Observable<ToDOs[]> {
    return this.http.get<ToDOs[]>('https://jsonplaceholder.typicode.com/todos').pipe(
      map(todos => todos.slice(0, 10))
    );
  }
}
