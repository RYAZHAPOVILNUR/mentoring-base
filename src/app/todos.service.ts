import { Injectable } from '@angular/core';
import { Todo } from './components/todos/todo-interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodosService {

  private todosSubject = new BehaviorSubject<Todo[]>([]);
  todos$ = this.todosSubject.asObservable();

  setTodos(todos: Todo[]) {
    this.todosSubject.next(todos);
  }

  editTodo(editedTodo: Todo) {
    this.todosSubject.next(
      this.todosSubject.value.map((todo) => {
        return todo.id === editedTodo.id ? editedTodo : todo;
      })
    );
  }

  createTodo(todo: Todo) {
    this.todosSubject.next([...this.todosSubject.value, todo]);
  }

  deleteTodo(id: number) {
    this.todosSubject.next(
      this.todosSubject.value.filter((item) => {
        return id !== item.id;
      })
    );
  }
}
