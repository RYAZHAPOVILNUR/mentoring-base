import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Todo} from "./todos-list/todos-list.component";

@Injectable({
  providedIn: 'root'
})
export class TodosApiService {
  http = inject(HttpClient);

  getTodos() {
    return this.http.get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
  }
}
