import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodosApiService } from '../services/todos-api.service';
import { Todo } from '../models/Todo';
import { AsyncPipe, NgFor } from '@angular/common';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [NgFor, TodoCardComponent, AsyncPipe],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosListComponent {


  readonly todosApiService = inject(TodosApiService)
  readonly todosService = inject(TodosService)
  
  constructor () {
   this.todosApiService.getTodos().subscribe((res: Todo[]) => {
    this.todosService.setTodos(res)
   })
  }

  deleteTodos(id: number) {
    this.todosService.deleteTodo(id)
  }
}
