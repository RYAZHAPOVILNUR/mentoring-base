import { Component, inject } from '@angular/core';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodosApiService } from '../todos-api.service';
import { NgFor } from '@angular/common';
import { Todo } from '../interfaces/todos.interface';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [TodoCardComponent, NgFor],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss'
})

export class TodosListComponent {
  private todosApiservice = inject(TodosApiService)
  todos: Todo[] = []

  constructor(){
    this.todosApiservice.getTodos().subscribe(todoList => {
      this.todos = todoList.slice(0,10)
    })
  }

  deleteTodo(id: number){
    this.todos = [...this.todos.filter(todo => todo.id !== id)]
  }
}
