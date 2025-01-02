import { Component, inject } from '@angular/core';
import { TodosApiService } from '../todos-api.service';
import { Todo } from '../todo.interface';
import { TodosCardComponent } from "./todos-card/todos-card.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [TodosCardComponent, NgFor],
  providers: [],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss'
})
export class TodosListComponent {
  readonly todosApiService = inject(TodosApiService);
  todos: Todo[] = []

  constructor() {
      this.todosApiService.getTodos().subscribe(
        (item) => this.todos = item
      )
  }

  deleteTodo (todoId: number) {
    this.todos = this.todos.filter(
      (item) => item.id !== todoId
    )
  }
} 
