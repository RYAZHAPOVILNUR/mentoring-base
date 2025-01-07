import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgFor, AsyncPipe } from '@angular/common';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodosApiService } from '../../todos-api.service';
import { TodosService } from '../../todos.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [NgFor, TodoCardComponent, AsyncPipe],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  readonly todosApiService = inject(TodosApiService);
  readonly TodosService = inject(TodosService);

  constructor() {
    this.todosApiService.getTodos().subscribe((response: any) => {
      this.TodosService.setTodos(response.slice(0, 33));
    });
  }

  deleteTodo(id: any) {
    this.TodosService.deleteTodo(id);
  }
}
