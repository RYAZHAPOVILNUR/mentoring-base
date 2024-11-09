import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Todo } from "./todos-list/todos-list.component";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private todosSubject$ = new BehaviorSubject<Todo[]>([]);
  todos$ = this.todosSubject$.asObservable();
  private _snackBar = inject(MatSnackBar);

  setTodos(todos: Todo[]) {
    this.todosSubject$.next(todos.slice(0,10))
  }

  editTodo(editedTodo: Todo) {
    this.todosSubject$.next(
      this.todosSubject$.value.map(
        todo => {
          if (todo.id === editedTodo.id) {
            return editedTodo
          } else {
            return todo
          }
        }
      )
    )
  }

  createTodo(todo: Todo) {
    const todoIsExisting = this.todosSubject$.value.find(
      (currentElement) => currentElement.title === todo.title
    )

    if(todoIsExisting !== undefined) {
      // alert('Такая задача уже существует')
      this._snackBar.open('Такая задача уже существует', 'ok', {
        duration: 4000
      })
    } else {
      this.todosSubject$.next([...this.todosSubject$.value, todo])
      // alert('Задача успешно добавленна')
      this._snackBar.open('Задача успешно добавленна', 'ok', {
        duration: 4000
      })
    }

  }

  deleteTodo(id: number) {
    this.todosSubject$.next(
      this.todosSubject$.value.filter(
        todo => todo.id !== id
      )
    )
  }
}
