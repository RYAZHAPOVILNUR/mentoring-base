import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { TodosCardComponent } from "./todos-card/todos-card.component";
import { AsyncPipe, NgFor } from '@angular/common';
import { TodosApiService } from '../todos-api.service';
import { Todo } from '../todos-api.service';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [TodosCardComponent, NgFor, AsyncPipe],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent {
    readonly todosApiService = inject(TodosApiService);
    readonly todosService = inject(TodosService);
    
    constructor(private cdr: ChangeDetectorRef) {
      this.todosApiService.getTodos().subscribe(todos => {
        this.todosService.setTodos(todos);
      });
    }

    deleteTodo(id: number) {
      this.todosService.deleteTodo(id);
    }
}
