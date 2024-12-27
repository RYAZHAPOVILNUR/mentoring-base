import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodosApiService } from '../todo-api.service';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodosService } from '../todos.service';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'todo-list-root',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
  standalone: true,
  imports: [NgFor, TodoCardComponent, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
  readonly todosApiService = inject(TodosApiService);
  readonly todosService = inject(TodosService);

  constructor() {
    this.todosApiService.getTodos().subscribe((res: any) => {
      this.todosService.setTodo(res);
    });
  }

  deleteTodo(id: number) {
    this.todosService.deleteTodo(id);
  }
}
