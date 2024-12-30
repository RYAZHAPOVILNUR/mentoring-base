import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodosApiService } from '../todos-api.service';
import { TodoCardComponent } from "./todo-card/todo-card.component";
import { AsyncPipe, NgFor } from '@angular/common';
import { Todo } from './todos-interface';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  standalone: true,
  imports: [TodoCardComponent, NgFor, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodosListComponent {
   readonly todosApiService = inject(TodosApiService);
   readonly todosService = inject(TodosService);


    constructor() {
      this.todosApiService.getTodos().subscribe(
        (response: Todo[]) => {
          this.todosService.setTodos(response);
        }
      )
    }

    deleteTodo(id: number) {
      this.todosService.deleteTodo(id)
    }
}
