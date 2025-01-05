import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodosApiService {
  readonly apiService = inject(HttpClient);

  getUsers() {
    return this.apiService.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=12');
  }
}
