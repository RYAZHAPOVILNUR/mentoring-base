import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodosApiService } from '../todos-api.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { TodosCardComponent } from './todos-card/todos-card.component';
import { TodosService } from '../todos.service';
import { CreateTodoFormComponent } from '../create-todo-form/create-todo-form.component';
import { ITodoForm } from '../interfaces/todo.interface';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  standalone: true,
  imports: [NgFor, TodosCardComponent, AsyncPipe, CreateTodoFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent {
  readonly todosApiService = inject(TodosApiService);
  readonly todosService = inject(TodosService);

  constructor() {
    this.todosApiService
      .getTodosList()
      .subscribe((response) => this.todosService.setTodo(response));
  }

  createTodo(formData: ITodoForm) {
    this.todosService.createTodo({
      id: new Date().getTime(),
      userId: formData.todoAuthor,
      title: formData.todoName,
      completed: formData.todoCompleted,
    });
  }

  deleteTodos(id: number) {
    this.todosService.deleteTodo(id);
  }
}
