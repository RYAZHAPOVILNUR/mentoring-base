import { Injectable } from '@angular/core';
import { Todo } from './users-list/user-interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodosService {
  private todosSubject$ = new BehaviorSubject<Todo[]>([]);
  todos$ = this.todosSubject$.asObservable();

  setTodos(todos: Todo[]) {
    this.todosSubject$.next(todos);
  }

  editTodo(editedTodo: Todo) {
    this.todosSubject$.next(
      this.todosSubject$.value.map((el) => {
        if (el.id === editedTodo.id) {
          return editedTodo;
        } else {
          return el;
        }
      })
    );
  }

  createTodo(todo: Todo) {
    const existingTodo = this.todosSubject$.value.find(
      (currentElement) => currentElement.title === todo.title
    );
    console.log(existingTodo);

    if (existingTodo !== undefined) {
      alert('ТАКАЯ ЗАДАЧА УЖЕ ЗАРЕГИСРИРОВАНА');
    } else {
      alert('ЗАДАЧА УСПЕШНО СОЗДАНА');
      this.todosSubject$.next([...this.todosSubject$.value, todo]);
    }
  }

  deleteTodo(id: number) {
    this.todosSubject$.next(
      this.todosSubject$.value.filter((el) => {
        if (id === el.id) {
          return false;
        } else {
          return true;
        }
      })
    );
  }
}