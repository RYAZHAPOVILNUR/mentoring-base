import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, Subscribable } from 'rxjs';

@Injectable({ providedIn: "root" })
export class TodosApiService {
  readonly apiService = inject(HttpClient);

  getTodos() {
    return this.apiService.get('https://jsonplaceholder.typicode.com/todos');
  }
}
