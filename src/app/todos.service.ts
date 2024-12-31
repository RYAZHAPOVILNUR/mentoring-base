import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from './todo-list/todo-list.component';

@Injectable({ providedIn: 'root' })
export class TodosService {
  todosSubject$ = new BehaviorSubject<Todo[]>([]);

  setTodo(todos: Todo[]) {
    this.todosSubject$.next(todos);
  }

  deleteTodo(id: number) {
    this.todosSubject$.next(
      this.todosSubject$.value.filter((todo) => todo.id !== id)
    );
  }

  createTodo(todo: Todo) {
    const uniqueId = this.todosSubject$.value.find((i) => i.id === todo.id);

    if (uniqueId) {
      alert(
        'Тудушка с таким Id уже существует, братан. Поменяй айдишку, брат, тогда все ровно будет.'
      );
    } else {
      this.todosSubject$.next([...this.todosSubject$.value, todo]);
      alert('Тудушка успешно добавлена!');
    }
  }
}
