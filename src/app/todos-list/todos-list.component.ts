import { Component, inject } from '@angular/core';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodosApiService } from '../todos-api.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { TodosService } from '../todos.service';
import { CreateTodoFormComponent } from '../create-todo-form/create-todo-form.component';
import { Todo } from '../interfaces/todos.interface';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [TodoCardComponent, NgFor, AsyncPipe, CreateTodoFormComponent],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss'
})

export class TodosListComponent {
  todosApiservice = inject(TodosApiService)
  todosService = inject(TodosService)
  todos$ = this.todosService.todos$
  
  constructor(){
    this.todosApiservice.getTodos().subscribe(todos => 
      this.todosService.setTodos(todos)
    )
  }

  createTodo(todo: Todo){
    this.todosService.createTodo(todo)
  }

  deleteTodo(id: number){
    this.todosService.deleteTodo(id)
  }

}
