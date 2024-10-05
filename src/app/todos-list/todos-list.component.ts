import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodoApiService } from '../todos-api.service';
import { TodosService } from '../todos.service';
import { CreateTodoFormComponent } from '../create-todo-form/create-todo-form.component';
import { TodoInterface } from '../interfaces/todo-interfaces';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [NgFor, TodoCardComponent, AsyncPipe, CreateTodoFormComponent], //* AsyncPipe - (| async) - это специальная функция которая читает данные из коробочек с данныеми из Subject-ов
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush, //* ChangeDetectionStrategy.OnPush  - В Angular будет проверять изменилсь ли ссылка на массив.
  // changeDetection: ChangeDetectionStrategy.OnPush - чтобы его использовать мы не должны мутировать
  // объекты, массивы а должны перезаписывать их чтобы менялась ссылка чтобы Angular видел изменения
  // changeDetection: ChangeDetectionStrategy.OnPush - Благодаря нему по мере расширения приложения не будет зависать в будущем.
})
export class TodosListComponent {
  readonly todoApiService = inject(TodoApiService);
  readonly todoService = inject(TodosService);

  constructor() {
    this.todoApiService.getTodos().subscribe((response: any) => {
      this.todoService.setTodos(response);
    });
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
  }

  public createTodo(fromDate: TodoInterface) {
    this.todoService.createTodo({
      userId: fromDate.userId,
      id: fromDate.id,
      title: fromDate.title,
      completed: fromDate.completed,
    })
  }
}

// Метод .subscribe() в Angular используется для того, чтобы "подписаться" на Observable — поток данных,
// который возвращает, например, HTTP-запрос или событие. Подписка позволяет получать данные
// по мере их поступления и выполнять действия, как только данные станут доступны.
