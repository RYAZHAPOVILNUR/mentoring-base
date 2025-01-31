import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodosApiService } from '../../todos-api.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { Todo } from '../../todo-interface';
import { TodosService } from '../../todos.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgFor, TodoCardComponent, AsyncPipe,],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodosComponent {
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
  this.todosService.deleteTodo(id);
    }
  }



export { Todo };
 