import {inject, Injectable} from '@angular/core';
import {Todo} from '../interfaces/user-interface';
import {BehaviorSubject} from 'rxjs';
import {LocalStorageService} from './local-storage.service';
import {TodosApiService} from './todosApi.service';

@Injectable({ providedIn: 'root' })
export class TodosService {
  private todosSubject$ = new BehaviorSubject<Todo[]>([]);
  public readonly todos$ = this.todosSubject$.asObservable();
  readonly localStorage = inject(LocalStorageService);
  readonly todoApiService = inject(TodosApiService);

  public loadTodos() {
    const localStorageTodos =
      this.localStorage.getFromLocalStorage<Todo[]>('todos');

    if (localStorageTodos) {
      this.todosSubject$.next(localStorageTodos);
    } else
      this.todoApiService.getTodos().subscribe((data) => {
        this.setTodos(data.slice(0, 10));
      });
  }

  setTodos(todos: Todo[]) {
    this.todosSubject$.next(todos);
    this.localStorage.saveToLocalStorage('todos', todos);
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
    this.setTodos(newTodo);
  }

  public editTodo(editedTodo: Todo) {
    const editTodo = this.todosSubject$.value.map((todo) => {
      if (todo.id === editedTodo.id) {
        return editedTodo;
      }
      return todo;
    });
    this.setTodos(editTodo);
  }

  public deleteTodo(id: number) {
    const updatedTodos = this.todosSubject$.value.filter(
      (todo) => todo.id !== id
    );
    this.setTodos(updatedTodos);
  }
}
