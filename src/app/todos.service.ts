import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Todo } from "./todos-list/todo-create";

@Injectable({providedIn: 'root'})
export class TodosService {
  todosSubject$ = new BehaviorSubject<Todo[]>([]);
  public todos$ = this.todosSubject$.asObservable();

  setTodos(todos: Todo[]) {
    this.todosSubject$.next(todos);
  }

  editTodos(editedTodo: Todo) {
    this.todosSubject$.next(
      this.todosSubject$.value.map(
        todo => {
          return todo.id === editedTodo.id ? editedTodo : todo
        }
      )
    )
  }

  createTodos(todo: Todo) {
    this.todosSubject$.next (
      [...this.todosSubject$.value, todo]
    )
  }

  deleteTodos(id: number) {
    this.todosSubject$.next(
      this.todosSubject$.value.filter(
        item => {
          return id === item.id ? false : true
        }
      )
    )
  }
}
