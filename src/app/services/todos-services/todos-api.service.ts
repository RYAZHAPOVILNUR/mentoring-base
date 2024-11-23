import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../interfaces/todo-interfaces';

@Injectable({ providedIn: 'root' })
export class TodosApiService {
  http = inject(HttpClient);

  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';

  getTodos(): Observable<Todo[]> {
   return this.http.get<Todo[]>(`${this.baseUrl}/todos`); 
 }
}