import {Inject, inject, Injectable} from "@angular/core";
import {TodosApiService} from "../api-services/todos-api.service";
import {BehaviorSubject} from "rxjs";
import {Todo} from "../interfaces/todo.interface";

@Injectable(
  {providedIn: 'root'}
)
export class TodosListService {
  todosApi = inject(TodosApiService)
  private todosSubject$= new BehaviorSubject<Todo[]>([]);
  todos$ = this.todosSubject$.asObservable();

  constructor() {
    this.todosApi.getTodos().subscribe(todos => this.todosSubject$.next(todos))
  }

  createTodo(todo: Todo) {

    this.todosSubject$.next([...this.todosSubject$.value, todo])
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
