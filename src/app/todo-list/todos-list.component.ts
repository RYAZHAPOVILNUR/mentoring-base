import {Component, inject} from "@angular/core";
import {TodosApiService} from "../todos-api.service";
import {NgForOf} from "@angular/common";
import {TodoCardComponent} from "./todo-card/todo-card.component";
import {Todo} from "../interfaces/user-interface";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todos-list.component.html',
  imports: [NgForOf, TodoCardComponent],
  styleUrl: './todos-list.component.scss'
})

export class TodosListComponent {
  readonly todosApiService = inject(TodosApiService)
  todos: Todo[] = [];

  constructor() {
    this.todosApiService.getTodos().subscribe(
      (response: any)=> {
        this.todos = response;
      }
    )
  }
  deleteTodo(id: number) {
    this.todos = this.todos.filter(
      todo => {
        if (id === todo.id) {
          return false
        } else {
          return true;
        }
      }
    )
  }
}
