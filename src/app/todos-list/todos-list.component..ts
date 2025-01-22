import { Component } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { TodosApiService } from '../todos-api.service';
import { inject } from '@angular/core';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { ChangeDetectionStrategy } from "@angular/core";
import { Todo } from './todo-create';
import { TodosService } from '../todos.service';

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
  readonly TodosService = inject(TodosService)
  todos: Todo[] = [];

  constructor () {
    this.todosApiService.getTodos().subscribe(
      (response: Todo[]) => {
        this.todos = response;
      }
    )
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(
      todo => {
        return todo.id === id ? false : true
      }
    )
  }
}
