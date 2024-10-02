import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ITodo } from './todo.interface';
import { TodosApiService } from '../todos-api.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { TodosCardComponent } from './todos-card/todos-card.component';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  standalone: true,
  imports: [NgFor, TodosCardComponent, AsyncPipe],
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

  deleteTodos(id: number) {
    this.todosService.deleteTodo(id);
  }
}
