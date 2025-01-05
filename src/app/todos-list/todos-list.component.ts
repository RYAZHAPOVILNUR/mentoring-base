import { Component, inject } from '@angular/core';
import { TodosCardComponent } from "./todos-card/todos-card.component";
import { NgFor } from '@angular/common';
import { TodosApiService } from '../todos-api.service';
import { Todo } from '../todos-api.service';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [TodosCardComponent, NgFor],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss'
})
export class TodosListComponent {
    readonly todosApiService = inject(TodosApiService);
    todos: Todo[] = [];
    
    constructor() {
    this.todosApiService.getUsers().subscribe(todos => {
      this.todos = todos;
      console.log(this.todos);
    });
    }

    deleteTodo(id: number) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }
}
