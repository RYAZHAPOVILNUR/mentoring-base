import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {Todo} from "./interfaces/todo-interface";

@Injectable({providedIn: 'root'})

export class TodosService {
  private todosSubject$ = new BehaviorSubject<Todo[]>([]);
  todos$ = this.todosSubject$.asObservable();

  setUsers(todos: Todo[]) {
    this.todosSubject$.next(todos);
  }

  editTodo(editedTodo: Todo) {
    this.todosSubject$.next(
      this.todosSubject$.value.map((todo) =>
        todo.id === editedTodo.id ? editedTodo : todo));
  }

  createTodo(todo: Todo) {
    const existingTodo = this.todosSubject$.value.find(
      currentElement => currentElement.title === todo.title
      // [...this.todosSubject$.value, todo]
    );

    existingTodo !== undefined
      ? alert('Такая задача уже есть!')
      : (this.todosSubject$.next([...this.todosSubject$.value, todo]), alert('Задача успешно добавлена!'));
  }

  deleteTodo(id: number) {
    this.todosSubject$.next(
      this.todosSubject$.value.filter(
        item => item.id !== id)
    )}
}
