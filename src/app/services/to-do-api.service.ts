import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToDoApiService {

  readonly http = inject(HttpClient)

  getToDo() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
  }

  
}
