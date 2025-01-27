import { Injectable } from '@angular/core';
import { Todo } from './components/todos/todo-interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodosService {

  todosSubject = new BehaviorSubject<Todo[]>([]);
  todos: Todo[] = [];

  setTodos(todos: Todo[]) {
    this.todos = todos;
    this.todosSubject.next(todos);
  }

  editTodo(editedTodo: Todo) {
    this.todosSubject.next(
      this.todosSubject.value.map((todo) => {
        if (todo.id === editedTodo.id) {
          return editedTodo;
        } else {
          return todo;
        }
      })
    );
  }

  createTodo(todo: Todo) {

    this.todosSubject.next([...this.todosSubject.value, todo]);
  }

  deleteTodo(id: number) {
    this.todosSubject.next(
      this.todosSubject.value.filter((item) => {
        if (id === item.id) {
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
