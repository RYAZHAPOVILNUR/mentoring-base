import { Component, inject } from '@angular/core';
import { TodosApiService } from '../todos-api.service';
import { Todo } from './todos-list.interface';
import { TodosCardComponent } from "./todos-card/todos-card.component";
import { CommonModule, NgFor } from '@angular/common';


@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [TodosCardComponent, NgFor, CommonModule],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss'
})
export class TodosListComponent {
  readonly todosApiService = inject(TodosApiService);
  todos: Todo [] = [];


  constructor() {
    this.todosApiService.getTodos().subscribe(
        (response: any) => {
          this.todos = response;
          console.log('Todos', this.todos);
      });
    
  }deleteTodos(id: number) {
    this.todos = this.todos.filter(item => item.id !== id);
  }
}

