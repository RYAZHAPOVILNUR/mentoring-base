import { inject, Injectable } from '@angular/core';
import { Todo } from '../components/home/users-list/user-interface';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { TodosApiService } from '../todosApi.service';

@Injectable({ providedIn: 'root' })
export class TodosService {
  private todosSubject$ = new BehaviorSubject<Todo[]>([]);
  private todosApiService = inject(TodosApiService);
  todos$ = this.todosSubject$.asObservable();

  // loadTodos() {
  //   const localStorageTodos = this.localStorage.getTodosFromLocalStorage();

  //   if (localStorageTodos) {
  //     this.todosSubject$.next(localStorageTodos);
  //   } else {
  //     this.todosApiService.getTodos().subscribe((data) => {
  //       this.localStorage.saveTodosToLocalStorage(data);
  //       this.todosSubject$.next(data);
  //     });
  //   }
  // }

  getTodos(): Todo[] {
    return this.todosSubject$.value;
  }

  setTodos(todos: Todo[]) {
    this.todosSubject$.next(todos);
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
