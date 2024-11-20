import { Component, inject } from '@angular/core';
import { TodosApiService } from '../todos-api.service';
import { Todo } from './todos-list.interface';
import { TodosCardComponent } from "./todos-card/todos-card.component";
import { CommonModule, NgFor } from '@angular/common';
import { TodosService } from '../todos.service';


@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [TodosCardComponent, NgFor, CommonModule],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss'
})
export class TodosListComponent {
  readonly todosApiService = inject(TodosApiService);
  readonly todosService = inject(TodosService)


  constructor() {
    this.todosApiService.getTodos().subscribe(
        (response: Todo[]) => {
          this.todosService.setTodos(response);
          console.log('Todos', this.todosService);
      });
    
  }deleteTodos(id: number) {
    this.todosService.deletedTodos(id);
  }
}

