import { inject, Injectable } from '@angular/core';
import { Todo } from '../components/home/users-list/user-interface';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { TodosApiService } from '../todosApi.service';

@Injectable({ providedIn: 'root' })
export class TodosService {
  private todosSubject$ = new BehaviorSubject<Todo[]>([]);
  public readonly todos$ = this.todosSubject$.asObservable();
  readonly localStorage = inject(LocalStorageService);
  readonly todoApiService = inject(TodosApiService);

  public loadTodos() {
    const localStorageTodos =
      this.localStorage.getTodosFromLocalStorage('todos');

    if (localStorageTodos) {
      this.todosSubject$.next(localStorageTodos.slice(0, 10));
    }
  }

  public createTodo(todo: Todo) {
    const existingTodo = this.todosSubject$.value.find(
      (currentElement) => currentElement.title === todo.title
    );

    if (existingTodo !== undefined) {
      alert('ТАКОЕ НАЗВАНИЕ УЖЕ ЗАРЕГИСРИРОВАНО');
    }
    alert('ЗАДАЧА УСПЕШНО СОЗДАНА');
    const newTodo = [...this.todosSubject$.value, todo];
    this.todosSubject$.next(newTodo);
    this.localStorage.saveTodosToLocalStorage(this.todosSubject$.value);
  }

  public editTodo(editedTodo: Todo) {
    const editTodo = this.todosSubject$.value.map((todo) => {
      if (todo.id === editedTodo.id) {
        return editedTodo;
      }
      return todo;
    });
    this.todosSubject$.next(editTodo);
    this.localStorage.saveTodosToLocalStorage(this.todosSubject$.value);
  }

  public deleteTodo(id: number) {
    const updatedTodos = this.todosSubject$.value.filter(
      (todo) => todo.id !== id
    );
    this.todosSubject$.next(updatedTodos);
    this.localStorage.saveTodosToLocalStorage(this.todosSubject$.value);
  }

  public updateLocalStorageTodos() {
    const todos = this.todosSubject$.value;
    this.todosSubject$.next(todos);
    this.localStorage.saveTodosToLocalStorage(this.todosSubject$.value);
  }
}

// getTodos(): Todo[] {
//   return this.todosSubject$.value;
// }

// setTodos(todos: Todo[]) {
//   this.todosSubject$.next(todos.slice(0, 10));
// }
