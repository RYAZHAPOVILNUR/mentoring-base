import {Component, inject} from "@angular/core";
import {TodosApiService} from "../todos-api.service";
import {NgForOf} from "@angular/common";
import {TodoCardComponent} from "./todo-card/todo-card.component";

export interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

@Component({
  selector: 'app-users-list',
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
  deleteTodo(id: any) {
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
