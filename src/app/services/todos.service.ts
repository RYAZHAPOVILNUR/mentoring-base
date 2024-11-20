import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { ITodo } from "../interfaces/todo"
import { LocalStorageService } from "./local-storage.service";
import { TodosApiService } from "./todos-api.service";

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  readonly localStorage = inject(LocalStorageService)
  readonly todosApiService = inject(TodosApiService)
  private todosSubject$ = new BehaviorSubject<ITodo[]>([]);
  public readonly todos$ = this.todosSubject$.asObservable();

  loadTodos() {
    const localStorageTodos = this.localStorage.getFromLocalStorage<ITodo[]>('todos')
      localStorageTodos && localStorageTodos.length > 0 ? this.todosSubject$.next(localStorageTodos) :
        this.todosApiService.getTodos().subscribe((data: ITodo[]) => {
              this.updatedTodos(data.slice(0,10))
            })
    // if (localStorageTodos && localStorageTodos.length > 0) {
    //   this.todosSubject$.next(localStorageTodos)
    // } else {
    //   this.todosApiService.getTodos().subscribe((data: ITodo[]) => {
    //     this.updatedTodos(data.slice(0,10))
    //   })
    // }
  }

  updatedTodos(todos: ITodo[]) {
    this.localStorage.saveToLocalStorage('todos', todos);
    this.todosSubject$.next(todos);
  }

  editTodo(editedTodo: ITodo) {
    const updatedTodo = this.todosSubject$.value.map(todo => todo.id === editedTodo.id ? editedTodo : todo);
    this.todosSubject$.next(updatedTodo);
    this.updatedTodos(updatedTodo);
  }

  createTodo(todo: ITodo) {
    const newTodo = ([...this.todosSubject$.value, todo]);
    this.updatedTodos(newTodo)
  }

  deleteTodo(id: number) {
    const deletedTodo = this.todosSubject$.value.filter(todo => todo.id !== id)
    this.updatedTodos(deletedTodo)
  }

  getTodos(): ITodo[] {
    return this.todosSubject$.value
  }
}
