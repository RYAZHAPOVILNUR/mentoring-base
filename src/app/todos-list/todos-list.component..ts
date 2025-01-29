import { AsyncPipe, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TodosApiService } from '../todos-api.service';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { ChangeDetectionStrategy } from "@angular/core";
import { TodosService } from '../todos.service';
import { Todo } from './todo-create';

@Component ({
  selector: 'app-user-list',
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  standalone: true,
  imports: [NgFor, TodoCardComponent, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodoListComponent {
  readonly todosApiService = inject(TodosApiService)
  readonly todosService = inject(TodosService)

  constructor () {
    this.todosApiService.getTodos().subscribe(
      (response: Todo[]) => {
        this.todosService.setTodos(response);
      }
    )
  }

  deleteTodo(id: number) {
    this.todosService.deleteTodos(id)
  }
}
