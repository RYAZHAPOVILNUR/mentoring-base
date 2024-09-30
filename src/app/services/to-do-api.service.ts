import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, take } from 'rxjs';
import { ToDOs } from '../to-do-list/to-do-list.component';

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
