import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private todosSubject$ = new BehaviorSubject<Todo[]>([])
  todos$ = this.todosSubject$.asObservable()

  constructor() { }

  setTodos(todos: Todo[]) {
    this.todosSubject$.next(todos)
  }
  editTodo(editedTodo: Todo) {
    this.todosSubject$.next(
      this.todosSubject$.value.map((user) => {
        if (user.id == editedTodo.id) {
          return editedTodo;
        } else {
          return user;
        }
      })
    );
  }
  createTodo(todo: Todo) {
    this.todosSubject$.next([...this.todosSubject$.value, todo ])
  }

  deleteTodo (id: number) {
    this.todosSubject$.next(
      this.todosSubject$.value.filter((item) => {
        if (id == item.id) {
          return false;
        } else {
          return true;
        }
      })
    )
  }
}
