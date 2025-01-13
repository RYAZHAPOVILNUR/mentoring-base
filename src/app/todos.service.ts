import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from './interfaces/todos.interface'; 

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private todosSubject$ = new BehaviorSubject<Todo[]>([])
  todos$ = this.todosSubject$.asObservable();

  setTodos(todos: Todo[]){
    this.todosSubject$.next(todos)
  }

  createTodo(todo: Todo){
    this.todosSubject$.next([...this.todosSubject$.value, todo])
  }

  editTodo(todoChanged: Todo){
    this.todosSubject$.next(this.todosSubject$.value.map(todo => todo.id === todoChanged.id ? todoChanged : todo))
  }

  deleteTodo(id: number){
    this.todosSubject$.next([...this.todosSubject$.value.filter(todo => todo.id !== id)])
  }
}
