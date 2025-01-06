import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from './todos-api.service';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private todosSubject$ = new BehaviorSubject<Todo[]>([]);
  todos$ = this.todosSubject$.asObservable();

  setTodos(todos: Todo[]) {
    this.todosSubject$.next(todos);
  };

  editTodo(editedTodo: Todo) {
    this.todosSubject$.next(
      this.todosSubject$.value.map(user => {
        if (user.id === editedTodo.id) {
          return editedTodo;
        }
        return user;
      })
    )
  }

  createTodo(todo: Todo) {
    this.todosSubject$.next([...this.todosSubject$.value, todo]);
  }

  deleteTodo(id: number) {
    this.todosSubject$.next(this.todosSubject$.value.filter(todo => todo.id !== id));
  }
}
