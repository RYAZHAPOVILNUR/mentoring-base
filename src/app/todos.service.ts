import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from './interfaces/todo.interface';

@Injectable({ providedIn: 'root' })
export class TodosService {
  private todosSubject$ = new BehaviorSubject<Todo[]>([]);
  public todosList$ = this.todosSubject$.asObservable();

  setTodos(todos: Todo[]) {
    this.todosSubject$.next(todos);
  }

  editTodo(editedTodo: Todo) {
    this.todosSubject$.next(
      this.todosSubject$.value.map((todo) => {
        if (todo.id === editedTodo.id) {
          return editedTodo;
        } else {
          return todo;
        }
      })
    );
  }

  createTodo(todo: Todo) {
    const existingTodo = this.todosSubject$.value.find(
      (currentElement) => currentElement.title === todo.title
    );
    if (existingTodo !== undefined) {
    } else {
      this.todosSubject$.next([...this.todosSubject$.value, todo]);
    }
  }

  deleteTodo(id: number) {
    this.todosSubject$.next(
      this.todosSubject$.value.filter((item) => {
        if (id === item.id) {
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
