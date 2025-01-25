import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodosApiService } from '../todos-api.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { TodosService } from '../todos.service';
import { CreateTodoFormComponent } from '../create-todo-form/create-todo-form.component';
import { Todo, createTodoI } from '../interfaces/todo.interface';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [NgFor, TodoCardComponent, AsyncPipe, CreateTodoFormComponent],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent {
  readonly todosApiService = inject(TodosApiService);
  readonly todosService = inject(TodosService);
  public readonly todosList$ = this.todosService.todosList$;

  constructor() {
    this.todosApiService.getTodos().subscribe((response: Todo[]) => {
      this.todosService.setTodos(response);
    });
  }

  deleteTodo(id: number): void {
    this.todosService.deleteTodo(id);
  }

  editTodo(todo: Todo) {
    this.todosService.editTodo(todo);
  }

  public createTodo(formData: createTodoI) {
    this.todosService.createTodo({
      id: new Date().getTime(),
      title: formData.title,
      userId: formData.userId,
      completed: formData.completed,
    });
  }
}
