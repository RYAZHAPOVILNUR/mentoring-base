import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class TodosApiService {
  getTodos() {
    return this.apiService.get('https://jsonplaceholder.typicode.com/todos');
  }
  readonly apiService = inject(HttpClient);

}
