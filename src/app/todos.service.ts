import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Todo} from "./interfaces/user-interface";

@Injectable({providedIn: 'root'})

export class TodosService {
  todosSubject = new BehaviorSubject<Todo[]>([]);

  setUsers(todos: Todo[]) {
    this.todosSubject.next(todos);
  }

  editTodo(editedTodo: Todo) {
    this.todosSubject.next(
      this.todosSubject.value.map(
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
    this.todosSubject.next(
      [...this.todosSubject.value, todo]
    )
  }

  deleteTodo(id: number) {
    this.todosSubject.next(
      this.todosSubject.value.filter(
        item => {
          if (id === item.id) {
            return false
          } else {
            return true;
          }
        }
      )
    )
  }
}
