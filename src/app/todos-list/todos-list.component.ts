import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodosApiService } from '../todos-api.service';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { AsyncPipe, NgFor } from '@angular/common';
import { TodosService } from '../todos.service';
import { CreateTodoFormComponent } from '../create-todo-form/create-todo-form.component';
import { Todo } from '../interfaces/todo-interface';

@Component({
  standalone: true,
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  imports: [TodoCardComponent, NgFor, AsyncPipe, CreateTodoFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent {
  readonly todosApiService = inject(TodosApiService);
  readonly todosService = inject(TodosService);

  constructor() {
    this.todosApiService
      .getTodos()
      .subscribe((res: any) => this.todosService.setTodos(res.slice(0, 10)));
  }

  deleteTodo(id: number) {
    this.todosService.deleteTodo(id);
  }

  createNewTodo(formData: Todo) {
    this.todosService.createTodo({
      id: new Date().getDate(),
      userId: formData.userId,
      title: formData.title,
      completed: formData.completed,
    });
  }
}
