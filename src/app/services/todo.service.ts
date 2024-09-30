import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToDOs } from '../to-do-list/to-do-list.component';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private ToDoSubject$ = new BehaviorSubject<ToDOs[]>([]);
  todos$ = this.ToDoSubject$.asObservable();

  setTodo(todo: ToDOs[]) {
    this.ToDoSubject$.next(todo)
    
  }

  editTodo(editedTodo: ToDOs) {
    this.ToDoSubject$.next(
      this.ToDoSubject$.value.map((todo) => {
        if (todo.id === editedTodo.id) {
          return editedTodo;
        } else {
          return todo;
        }
      })
    );
  }

  createTodo(todo: ToDOs) {
    this.ToDoSubject$.next([...this.ToDoSubject$.value, todo]);
    // this.todos = [...this.todos, todo]
  }

  deleteTodo(id: number) {
    this.ToDoSubject$.next(
      this.ToDoSubject$.value.filter((todo) => {
        if (todo.id === id) return false;
        else return true;
      })
    );
  }
}
