import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodosApiService } from '../../todos-api.service';

export interface Todo {
  userId: number;
  title: string;
  id : number;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [NgFor,TodoCardComponent ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',

})
export class TodoListComponent {
readonly todosApiService = inject(TodosApiService);
todos : Todo[] = [];

constructor() {
  this.todosApiService.getTodos().subscribe(
    (respons: any) => {
    this.todos = respons;
  }
)
}

deleteTodo(id: any) {
  this.todos = this.todos.filter(
    todo => {
      if (id === todo.id) {
        return false;
      } else {
        return true;
      }
    }
  )
}
}
