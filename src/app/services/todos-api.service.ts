import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})


export class TodosApiService {

  constructor() { }
  readonly apiService = inject(HttpClient)

  getTodos() {
      return this.apiService.get<Array<Todo>>('https://jsonplaceholder.typicode.com/todos')
  }
}
