import { inject, Injectable } from '@angular/core';
import { Todo } from './todos-list/todos-list.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosApiService {
  private apiService = inject(HttpClient)

  getTodos(){
    return this.apiService.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
  }
}
