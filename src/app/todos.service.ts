import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoInterface } from './interfaces/todo-interfaces';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private todosSubject$ = new BehaviorSubject<TodoInterface[]>([]);
  // <TodoInterface[]> - (<> дженрик тип) данных TodoInterface[], озночает теперь в коробочке будет лежать TodoInterface.
  todos$ = this.todosSubject$.asObservable();

  //*Установка todos
  setTodos(todos: TodoInterface[]) {
    // можно писать Array<TodoInterface> или так TodoInterface[] смысл один и тот же.
    this.todosSubject$.next(todos);
  }

  //* Изменение todo
  editTodo(editTodo: TodoInterface) {
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
  createTodo(todo: TodoInterface) {
    const existingUserId = this.todosSubject$.value.find(
      (currentElement) => currentElement.userId === todo.userId
    );
    const existingId = this.todosSubject$.value.find(
      (currentElement) => currentElement.id === todo.id
    );
    const existingTextTask = this.todosSubject$.value.find(
      (currentElement) => currentElement.title === todo.title
    );

    if (existingUserId !== undefined) {
      alert('ТАКАЯ ЗАДАЧА УЖЕ ЕСТЬ!');
    } else if (existingId !== undefined) {
      alert('ТАКОЙ ID УЖЕ ЕСТЬ!');
    } else if (existingTextTask !== undefined) {
      alert('ТАКОЙ ТЕКСТ ЗАДАЧИ УЖЕ ЕСТЬ!');
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
