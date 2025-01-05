import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Todo } from "./todos-list/todos-interface";

@Injectable({providedIn: 'root'})
export class TodosService {
  private todosSubject$ = new BehaviorSubject<Todo[]>([]);
  todosObservable$: Observable<Todo[]> = this.todosSubject$.asObservable();

  setTodos(todos: Todo[]) {
    this.todosSubject$.next(todos);
  }

  editTodo(editedTodo: Todo) {
    this.todosSubject$.next(
      this.todosSubject$.value.map(
        todo => (todo.id === editedTodo.id ? editedTodo : todo)
      )
    )
  }

  createTodo(todo: Todo) {
    const existingTodo = this.todosSubject$.value.find(
      currentElement => currentElement.id === todo.id)

    console.log(existingTodo);

    if(existingTodo !== undefined) {
      alert('ТАКОЙ ID УЖЕ ЗАРЕГИСТРИРОВАН')
    } else {
      this.todosSubject$.next(
        [...this.todosSubject$.value, todo]);
        alert('НОВЫЙ ПОЛЬЗОВАТЕЛЬ УСПЕШНО ДОБАВЛЕН')
    }
  }

  deleteTodo(id: number) {
    this.todosSubject$.next(
      this.todosSubject$.value.filter(todo => id === todo.id ? false : true)
    )
  }
}
