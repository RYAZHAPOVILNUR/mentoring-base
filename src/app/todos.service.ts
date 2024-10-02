import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITodo } from './todos-list/todo.interface';

@Injectable({ providedIn: 'root' })
export class TodosService {
  todosSubject$ = new BehaviorSubject<ITodo[]>([]);

  setTodo(todos: ITodo[]) {
    this.todosSubject$.next(todos);
  }

  createTodo(newTodo: ITodo) {
    this.todosSubject$.next([...this.todosSubject$.value, newTodo]);
  }

  editTodo(editedTodo: ITodo) {
    this.todosSubject$.next(
      this.todosSubject$.value.map((item) => {
        if (item.id === editedTodo.id) {
          return editedTodo;
        } else {
          return item;
        }
      })
    );
  }

  deleteTodo(id: number) {
    this.todosSubject$.next(
      this.todosSubject$.value.filter((item) => {
        return item.id !== id;
      })
    );
  }
}
