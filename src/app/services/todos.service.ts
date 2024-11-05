import { inject, Injectable } from '@angular/core';
import { Todo } from '../components/home/users-list/user-interface';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { TodosApiService } from '../todosApi.service';

@Injectable({ providedIn: 'root' })
export class TodosService {
  private todosSubject$ = new BehaviorSubject<Todo[]>([]);
  todos$ = this.todosSubject$.asObservable();

  getTodos(): Todo[] {
    return this.todosSubject$.value;
  }

  setTodos(todos: Todo[]) {
    this.todosSubject$.next(todos.slice(0, 10));
  }

  createTodo(todo: Todo) {
    const existingUser = this.todosSubject$.value.find(
      (currentElement) => currentElement.title === todo.title
    );
    console.log(existingUser);
    if (existingUser !== undefined) {
      alert('ТАКОЙ ЕМЕЙЛ УЖЕ ЗАРЕГИСРИРОВАН');
    }
    alert('ЮЗЕР УСПЕШНО СОЗДАН');
    this.todosSubject$.next([...this.todosSubject$.value, todo]);
  }

  deleteTodo(id: number) {
    this.todosSubject$.next(
      this.todosSubject$.value.filter((el) => {
        if (id === el.id) {
          return false;
        }
        return true;
      })
    );
  }

  editTodo(EditedTodo: Todo) {
    this.todosSubject$.next(
      this.todosSubject$.value.map((todo) => {
        if (todo.id === EditedTodo.id) {
          return EditedTodo;
        }
        return todo;
      })
    );
  }
}
