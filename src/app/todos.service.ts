import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITodo } from './interfaces/todo-interfaces';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private todosSubject$ = new BehaviorSubject<ITodo[]>([]);
  // <ITodo[]> - (<> дженрик тип) данных ITodo[], озночает теперь в коробочке будет лежать ITodo.
  todos$ = this.todosSubject$.asObservable();

  //*Установка todos
  setTodos(todos: ITodo[]) {
    // можно писать Array<ITodo> или так ITodo[] смысл один и тот же.
    this.todosSubject$.next(todos);
  }

  //* Изменение todo
  editTodo(editTodo: ITodo) {
    this.todosSubject$.next(
      this.todosSubject$.value.map((todo) => {
        if (todo.id === editTodo.id) {
          return editTodo;
        } else {
          return todo;
        }
      })
    );
  }

  //* Создаем todo
  createTodo(todo: ITodo) {
    const existingUserId = this.todosSubject$.value.find(
      (currentElement) => currentElement.userId === todo.userId
    );

    if (existingUserId !== undefined) {
      alert('ТАКАЯ ЗАДАЧА УЖЕ ЕСТЬ!');
    } else {
      this.todosSubject$.next([...this.todosSubject$.value, todo]);
      alert('НОВАЯ ЗАДАЧА УСПЕШНО ДОБАВЛЕНА!');
    }
    // spreadOperation ... работает с объектами
    // restOperation ... работает с массивами
  }

  //*Удаляем todo
  deleteTodo(id: number) {
    this.todosSubject$.next(
      this.todosSubject$.value.filter((item) => id !== item.id)
    );
  }
}
