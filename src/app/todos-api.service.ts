import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Todo} from "./todos-list/todos-list.component";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodosApiService {
  http = inject(HttpClient);

  private todosSubject$= new BehaviorSubject<Todo[]>([]);
  todos$ = this.todosSubject$.asObservable();

  apiUrl = "https://jsonplaceholder.typicode.com/"

  constructor() {
    this.getTodos()
  }

  getTodos() {
     this.http.get<Todo[]>(`${this.apiUrl}posts`)
      .subscribe(
        (todos) => this.todosSubject$.next(todos),
      )
    return this.todos$
  }
  createTodo(todo: Todo) {
    const user: Todo = {
      id: new Date().getTime(),
      title: todo.title,
      body: todo.body,
      userId: new Date().getTime(),
    }
    this.todosSubject$.next([...this.todosSubject$.value, user])
  }
  editTodo(editedTodo: Todo) {
    this.todosSubject$.next(
      this.todosSubject$.value.map((todo) => todo.id == editedTodo.id ? editedTodo : todo)
    )
  }
  deleteTodo(id: number) {
  this.todosSubject$.next(
    this.todosSubject$.value.filter((todo => todo.id != id))
  )
  }
}
