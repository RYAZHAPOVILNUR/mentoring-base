import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITodo } from '../../interfaces/todo.interface';

@Injectable({ providedIn: 'root' })
export class TodosService {
  private todosSubject$ = new BehaviorSubject<ITodo[]>([]);
  public todos$ = this.todosSubject$.asObservable();
  setTodos(todos: ITodo[]) {
    this.todosSubject$.next(todos);
  }

  editUser(editedTodo: ITodo) {
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
  createTodo(todo: ITodo) {
    this.todosSubject$.next([...this.todosSubject$.value, todo]);
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
