import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Todo} from "../interfaces/todo.interface";

@Injectable(
  {providedIn: 'root'}
)
export class TodosListService {
  private todosSubject$ = new BehaviorSubject<Todo[]>([]);
  public todos$ = this.todosSubject$.asObservable();

  public setTodos(todos: Todo[]) {
    this.todosSubject$.next(todos)
  }

  public createTodo(todo: Todo) {
    this.todosSubject$.next([...this.todosSubject$.value, todo])
  }

  public editTodo(editedTodo: Todo) {
    this.todosSubject$.next(
      this.todosSubject$.value.map((todo) => todo.id == editedTodo.id ? editedTodo : todo)
    )
  }

  public deleteTodo(id: number) {
    this.todosSubject$.next(
      this.todosSubject$.value.filter((todo => todo.id != id))
    )
  }
}
