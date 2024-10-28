import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Todo } from "./todos-list/todos-list.component";

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private todosSubject$ = new BehaviorSubject<Todo[]>([]);
  todos$ = this.todosSubject$.asObservable()

  setTodos(todos: Todo[]) {
    this.todosSubject$.next(todos)
  }

  editTodo(editedTodo: Todo) {
    this.todosSubject$.next(
      this.todosSubject$.value.map(
        todo => {
          if (todo.id === editedTodo.id) {
            return editedTodo
          } else {
            return todo
          }
        }
      )
    )
  }

  createTodo(todo: Todo) {
    const todoIsExisting = this.todosSubject$.value.find(
      (currentElement) => currentElement.title === todo.title
    )

    if(todoIsExisting !== undefined) {
      alert('Такая задача уже существует')
    } else {
      this.todosSubject$.next([...this.todosSubject$.value, todo])
      alert('Задача успешно добавленна')
    }

  }

  deleteTodo(id: number) {
    this.todosSubject$.next(
      this.todosSubject$.value.filter(
        todo => todo.id !== id
      )
    )
  }
}
