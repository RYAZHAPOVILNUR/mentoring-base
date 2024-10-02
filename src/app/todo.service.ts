import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Todo } from "./interfaces/todo-interface";

@Injectable ({providedIn: 'root'})

export class TodoService {
  private todoSubject$ = new BehaviorSubject<Todo[]>([]);
  todos$ = this.todoSubject$.asObservable();

  setTodos (todos: Todo[]) {
    this.todoSubject$.next(todos);
  }

  editTodo (editedTodo: Todo) {
    this.todoSubject$.next(
      this.todoSubject$.value.map(
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

  createTodo (todo: Todo) {
    const existingTodo = this.todoSubject$.value.find(
      (currentElement) => currentElement.title === todo.title
    );

    if (existingTodo !== undefined) {
      alert ('Такая задача уже добавлена');
    } else {
      this.todoSubject$.next([...this.todoSubject$.value, todo]);
      alert ('Задача успешно добавлена');
    }
  }

  deleteTodo (id: number) {
    this.todoSubject$.next (
      this.todoSubject$.value.filter (
        todo => {
          if (id === todo.id) {
            return false
          } else {
            return true;
          }
        }
      )
    )
  }
}