import { Component, inject } from '@angular/core';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodosApiService } from '../todos-api.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [TodoCardComponent, NgFor, AsyncPipe],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss'
})

export class TodosListComponent {
  todosApiservice = inject(TodosApiService)
  todosService = inject(TodosService)

  constructor(){
    this.todosApiservice.getTodos().subscribe(todos => 
      this.todosService.setTodos(todos)
    )
  }

  deleteTodo(id: number){
    this.todosService.deleteTodo(id)
  }

}
