import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Todo } from "./todos-list/todo-interface"; 

@Injectable({providedIn: 'root'})
export class TodoService {
    private todosSubject$ = new BehaviorSubject<Todo[]>([]);
    todos$ = this.todosSubject$.asObservable();

    setUsers(todos: Todo[]) {
        this.todosSubject$.next(todos);
    }

    editUser(editedTodo: Todo) {
      this.todosSubject$.next(
          this.todosSubject$.value.map(todo => todo.id === editedTodo.id ? editedTodo : todo)
      );
  }

    createUser(todo: Todo) {
        this.todosSubject$.next (
            [...this.todosSubject$.value, todo]
      )
    }

    deleteUser(id: number) {
      this.todosSubject$.next(
          this.todosSubject$.value.filter(item => item.id !== id)
      );
  }
}