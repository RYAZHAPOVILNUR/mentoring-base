import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodosApiService } from '../todos-api.service';
import { Todo } from '../todo.interface';
import { TodosCardComponent } from "./todos-card/todos-card.component";
import { AsyncPipe, NgFor } from '@angular/common';
import { TodosService } from '../todos.service';
import { CreateTodoFormComponent } from '../create-todo-form/create-todo-form.component';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [TodosCardComponent, NgFor, AsyncPipe, CreateTodoFormComponent],
  providers: [],
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent {
  readonly todosApiService = inject(TodosApiService);
  todosService = inject(TodosService)

  constructor() {
      this.todosApiService.getTodos().subscribe(
        (item) => this.todosService.setTodos(item)
      )
  }

  deleteTodo (todoId: number) {
    this.todosService.deleteTodo(todoId)
  }

  createTodo(form: Todo) {
    this.todosService.createTodo({
      "id": form.id,
      "title": form.title,
      "userId": form.userId,
      "completed": form.completed,
    })
  }
} 
