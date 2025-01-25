import { AsyncPipe, NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Output,
} from '@angular/core';
import { MatSnackBar, } from '@angular/material/snack-bar';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodosApiService } from './todos-api.service';
import { TodosService } from './todo-card/todos.service';
import { CreateTodoFormComponent } from '../components/create-todo-form/create-todo-form.component';
import { MatDialog } from '@angular/material/dialog';
import { ITodo } from '../interfaces/todo.interface';


@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  standalone: true,
  imports: [NgFor, TodoCardComponent, AsyncPipe, CreateTodoFormComponent, ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent {
  readonly todosApiService = inject(TodosApiService);
  readonly todosService = inject(TodosService);
  readonly snackBar = inject(MatSnackBar);
  constructor() {
    this.todosApiService.getTodos().subscribe((response: any) => {
      this.todosService.setTodos(response.slice(0, 10));
    });
  }
  deleteTodo(id: number) {
    this.todosService.deleteTodo(id);
  }
  createTodo(todo: ITodo) {
    console.log(todo);
    this.todosService.createTodo(todo);
  }


  @Output()
  editTodo = new EventEmitter<ITodo>();

  @Output()
  deleteUser = new EventEmitter<ITodo>();

  readonly dialog = inject(MatDialog);

 
  }
