import { Component, inject } from '@angular/core';
import { ToDoApiService } from '../services/to-do-api.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { ToDoCardComponent } from './to-do-card/to-do-card.component';
import { TodoService } from '../services/todo.service';
import { CreateTodoComponent } from "../create-todo/create-todo.component";

export interface ToDOs {
  userID: string;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [NgFor, ToDoCardComponent, AsyncPipe, CreateTodoComponent],
  templateUrl: './to-do-list.component.html',

  styleUrl: './to-do-list.component.scss',
})
export class ToDoListComponent {
  ToDoApi = inject(ToDoApiService);
  ToDoService = inject(TodoService);

  constructor() {
    this.ToDoApi.getToDo().subscribe((response: any) => {
      this.ToDoService.setTodo(response);
    });
  }

  deleteToDo(id: number) {
    this.ToDoService.deleteTodo(id);
  }

  CreateTask(FormData: ToDOs){
    this.ToDoService.createTodo({
      id: new Date().getTime(),
      title: FormData.title,
      userID: FormData.userID,
      completed: false
    })
  }
}
