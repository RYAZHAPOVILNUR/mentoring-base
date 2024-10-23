import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodosApiService } from '../todos-api.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { TodosCardComponent } from './todos-card/todos-card.component';
import { TodosService } from '../todos.service';
import { CreateTodoDialogComponent } from './create-todo/create-todo-dialog/create-todo-dialog.component';
import { ITodo } from '../interfaces/todo.interface';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  standalone: true,
  imports: [
    NgFor,
    TodosCardComponent,
    AsyncPipe,
    CreateTodoComponent,
    CreateTodoDialogComponent,
    MatCardModule,
  ],
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

  createTodo(formData: ITodo) {
    this.todosService.createTodo({
      id: new Date().getTime(),
      userId: formData.userId,
      title: formData.title,
      completed: formData.completed,
    });
  }

  deleteTodo(id: number) {
    this.todosService.deleteTodo(id);
  }

  editTodo(todo: ITodo) {
    this.todosService.editTodo(todo);
  }
}
