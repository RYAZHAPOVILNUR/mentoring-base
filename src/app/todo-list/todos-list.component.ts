import {ChangeDetectionStrategy, Component, inject} from "@angular/core";
import {TodosApiService} from "../todos-api.service";
import {AsyncPipe, NgForOf} from "@angular/common";
import {TodoCardComponent} from "./todo-card/todo-card.component";
import {TodosService} from "../todos.service";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todos-list.component.html',
  imports: [NgForOf, TodoCardComponent, AsyncPipe],
  styleUrl: './todos-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodosListComponent {
  readonly todosApiService = inject(TodosApiService)
  readonly todoService = inject(TodosService);

  constructor() {
    this.todosApiService.getTodos().subscribe(
      (response: any)=> {
        this.todoService.setUsers(response);
      }
    )
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
  }
}
