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

  loadTodos() {
    const localStorageTodos =
      this.localStorage.getTodosFromLocalStorage('todos');

    if (localStorageTodos) {
      this.todosSubject$.next(localStorageTodos);
    }
    this.todoApiService.getTodos().subscribe((data) => {
      this.todosSubject$.next(data.slice(0, 10));
      this.localStorage.saveTodosToLocalStorage('todos', data);
    });
  }

  public updateLocalStorageTodos() {
    const todos = this.todosSubject$.value;
    this.localStorage.saveTodosToLocalStorage('todos', todos);
  }

  createTodo(todo: Todo) {
    const existingTodo = this.todosSubject$.value.find(
      (currentElement) => currentElement.title === todo.title
    );

    if (existingTodo !== undefined) {
      alert('ТАКОЕ НАЗВАНИЕ УЖЕ ЗАРЕГИСРИРОВАНО');
    }
    alert('ЗАДАЧА УСПЕШНО СОЗДАНА');
    const newTodo = [...this.todosSubject$.value, todo];
    this.localStorage.saveTodosToLocalStorage('todo', newTodo);
  }

  editTodo(editedTodo: Todo) {
    const editTodo = this.todosSubject$.value.map((todo) => {
      if (todo.id === editedTodo.id) {
        return editedTodo;
      }
      return todo;
    });
    this.localStorage.saveTodosToLocalStorage('todos', editTodo);
    this.todosSubject$.next(editTodo);
  }

  deleteTodo(id: number) {
    const findTodo = this.todosSubject$.value.find((todo) => todo.id === id);
    const deleteTodo = this.todosSubject$.value.filter((todo) => todo.id === id);

    if (findTodo && confirm('Вы точно хотите удалить карточку задачи ' + findTodo.title + '?')) {
      this.localStorage.saveTodosToLocalStorage('todos', deleteTodo);
      this.todosSubject$.next(deleteTodo);
    }
  }
}

// getTodos(): Todo[] {
//   return this.todosSubject$.value;
// }

// setTodos(todos: Todo[]) {
//   this.todosSubject$.next(todos.slice(0, 10));
// }
