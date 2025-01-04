import { Component, inject } from '@angular/core';
import { TodosApiService } from '../todos-api.service';
import { Todo } from '../todo.interface';
import { TodosCardComponent } from "./todos-card/todos-card.component";
import { AsyncPipe, NgFor } from '@angular/common';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [TodosCardComponent, NgFor, AsyncPipe],
  providers: [],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss'
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
} 
