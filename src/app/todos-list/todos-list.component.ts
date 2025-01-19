import { Component, inject } from '@angular/core';
import { TodosApiService } from '../todos-api.service';
import { Todo } from '../models/Todo';
import { NgFor } from '@angular/common';
import { TodoCardComponent } from './todo-card/todo-card.component';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [NgFor, TodoCardComponent],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss'
})
export class TodosListComponent {

  todos: Todo[] = []

  readonly todosApiService = inject(TodosApiService)
  
  constructor () {
    this.todosApiService.getTodos().subscribe((res: Todo[]) => {
      this.todos = res;
      console.log(this.todos)
    });
  }

  deleteTodos(id: number) {
    this.todos = this.todos.filter((item) => item.id !== id);
  }
}
