import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Todo } from "./todos-list/todos-list.component";

@Injectable ({providedIn: 'root'})

export class TodoService {
  todoSubject$ = new BehaviorSubject<Todo[]>([]);

  setTodos (todos: Todo[]) {
    this.todoSubject$.next(todos);
  }

  editTodo (editedTodo: Todo) {
    this.todoSubject$.next(
      this.todoSubject$.value.map(
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

  createTodo (todo: Todo) {
    this.todoSubject$.next(
      [...this.todoSubject$.value, todo]
    )
  }

  deleteTodo (id: any) {
    this.todoSubject$.next (
      this.todoSubject$.value.filter (
        todo => {
          if (id === todo.id) {
            return false
          } else {
            return true;
          }
        }
      )
    )
  }
}