import { Injectable } from '@angular/core';
import { Todo } from './todo-list/todos-list.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodosService {
  private todoSubject$ = new BehaviorSubject<Todo[]>([]);
  todos$ = this.todoSubject$.asObservable();

  setTodos(todos: Todo[]) {
    this.todoSubject$.next(todos);
  }

  editTodo(editedTodo: Todo) {
    this.todoSubject$.next(
      this.todoSubject$.value.map((todo) => {
        if (todo.id === editedTodo.id) {
          return editedTodo;
        } else {
          return todo;
        }
      }
    )
    )
  }

  createTodo(todo: Todo) {
    this.todoSubject$.next([...this.todoSubject$.value, todo]);
  }

  deleteTodo(id: number) {
    this.todoSubject$.next(
      this.todoSubject$.value.filter((item) => {
        if (id === item.id) {
          return false;
        } else {
          return true;
        }
      }
    )
    )
  }
}