import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITodo } from './Interfaces/todo.interface';

@Injectable({ providedIn: 'root' })
export class TodosService {
  private todoSubject$ = new BehaviorSubject<ITodo[]>([]);
  todos$ = this.todoSubject$.asObservable();

  setTodos(todos: ITodo[]) {
    this.todoSubject$.next(todos);
  }

  editTodo(editedTodo: ITodo) {
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

  createTodo(todo: ITodo) {
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