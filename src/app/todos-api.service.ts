import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";


@Injectable({providedIn: "root"})
export class TodosApiService {
  readonly apiServise = inject(HttpClient);

  getTodos() {
    return this.apiServise.get('https://jsonplaceholder.typicode.com/todos')
  }
}
