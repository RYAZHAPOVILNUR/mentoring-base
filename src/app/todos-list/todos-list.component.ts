import { AsyncPipe, NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { TodosApiService } from "../todos-api.service";
import { TodosCardComponent } from "./todos-card/todos-card.component";
import { TodoService } from "../todo.service";

export interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

@Component ({
selector: 'app-todos-list',
templateUrl: './todos-list.component.html',
styleUrl: './todos-list.component.scss',
standalone: true,
imports: [NgFor, TodosCardComponent,AsyncPipe],
changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosListComponent {
  readonly todosApiService = inject (TodosApiService);
  readonly todosService = inject (TodoService);

  constructor () {
    this.todosApiService.getTodos().subscribe(
        (response:any) => {this.todosService.setTodos(response)
      }
    )
  }

  DeleteTodo(id:number) {
    this.todosService.deleteTodo(id)
  }
}