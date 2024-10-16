import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { RouterLink } from '@angular/router';
import { TodosApiService } from '../todos-api.service';
import { TodoService } from '../todos.service';
import { CreateTodoFormComponent } from '../create-todo-form/create-todo-form.component';
import { Todo } from '../interfaces/todo-interfaces';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'api-todos-list',
  standalone: true,
  imports: [
    NgFor,
    RouterLink,
    TodoCardComponent,
    AsyncPipe,
    CreateTodoFormComponent,
  ],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  readonly todosApiService = inject(TodosApiService);
  readonly todosService = inject(TodoService);

readonly dialog =  inject(MatDialog)
  constructor() {
    this.todosApiService.getTodos().subscribe((response: any) => {
      this.todosService.setTodos(response);
    });
  }

  openDeleteTodoDialog (){}

  deleteTodo(id: number): void {
    this.todosService.deleteTodo(id);
  }

  public createTodo(formData: Todo): void {
    this.todosService.createTodo({
      id: new Date().getTime(),
      userId: formData.userId,
      title: formData.title,
      completed: formData.completed,
    });
  }


  openCreateTodoDialog(): void {
   const dialogRef = this.dialog.open(CreateTodoFormComponent, {
     width: '400px',
   });

   dialogRef.afterClosed().subscribe((result: Todo) => {
     if (result) {
      this.todosService.createTodo({
       id: new Date().getTime(),
       userId: result.userId,
       title: result.title,
       completed: result.completed,
     });
     }
   });
 }



}
