import { AsyncPipe, NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { TodosApiService } from "../todos-api.service";
import { TodoCardComponent } from "./todo-card/todo-card.component";
import { TodosService } from "../todos.service";

export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

@Component({
    selector: 'app-todos-list',
    standalone: true,
    imports: [NgFor, TodoCardComponent, AsyncPipe],
    templateUrl: './todos-list.component.html',
    styleUrls: ['./todos-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})


export class TodosListComponent{
  readonly todosApiServise = inject(TodosApiService);
  readonly todosService = inject(TodosService);

    constructor() {
        this.todosApiServise.getTodos().subscribe(
          (response: Todo[]) => {
                this.todosService.setTodos(response)
            }
        )  
    }

    deleteTodo(id: number) {
        this.todosService.deleteTodo(id)
    }
}