import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {Todo} from "../interfaces/todo.interface";

@Injectable({
  providedIn: 'root'
})
export class TodosApiService {
  http = inject(HttpClient);
  apiUrl = "https://jsonplaceholder.typicode.com"


  getTodos() {
     return  this.http.get<Todo[]>(`${this.apiUrl}/todos`)
  }
}
