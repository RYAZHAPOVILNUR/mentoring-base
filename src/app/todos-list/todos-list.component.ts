import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodosApiService } from '../todos-api.service';
import { Todo } from '../todo.interface';
import { TodosCardComponent } from "./todos-card/todos-card.component";
import { AsyncPipe, NgFor } from '@angular/common';
import { TodosService } from '../todos.service';
import { CreateTodoFormComponent } from '../create-todo-form/create-todo-form.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [TodosCardComponent, NgFor, AsyncPipe, MatButton],
  providers: [],
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent {
  readonly todosApiService = inject(TodosApiService);
  todosService = inject(TodosService)

  private dialog = inject(MatDialog)

  private _snackBar = inject(MatSnackBar);

  constructor() {
      this.todosApiService.getTodos().subscribe(
        (item) => this.todosService.setTodos(item)
      )
  }

  deleteTodo (todoId: number) {
    this.todosService.deleteTodo(todoId)
  }

  editTodo(todo: Todo) {
    this.todosService.editTodo(todo)
    console.log(todo)
  }

  createTodo() {
    const dialogRef = this.dialog.open(CreateTodoFormComponent)

    dialogRef.afterClosed().subscribe(form => {
      console.log('The dialog was closed');
      if (form) {
        this.todosService.createTodo({
          id: new Date().getTime(),
          title: form.title,
          userId: form.userId,
          completed: form.completed,
        });
        this._snackBar.openFromComponent(SnackbarComponent, {
          duration: 5000,
                  data: {
                  isCreateTodo: true,
                  }
        })
      }
    });
  }
} 
