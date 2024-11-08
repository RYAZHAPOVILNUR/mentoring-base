import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodosService } from '../../../services/todos.service';
import { CreateTodosFormComponent } from '../create-todos-form/create-todos-form.component';
import { Todo } from '../users-list/user-interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { CreateTodoDialogComponent } from './todo-card/create-todo-dialog/create-todo-dialog.component';
import { TodosApiService } from '../../../todosApi.service';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [NgFor, TodoCardComponent, AsyncPipe, CreateTodosFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './todos-list.component.component.html',
  styleUrl: './todos-list.component.component.scss',
})
export class TodosListComponent implements OnInit {
  readonly todosService = inject(TodosService);
  readonly todoApiService = inject(TodosApiService);

  ngOnInit(): void {
    this.todosService.loadTodos()
  }

  public createTodo(formData: Todo) {
    this.todosService.createTodo({
      id: new Date().getTime(),
      title: formData.title,
      userId: formData.userId,
      completed: formData.completed,
    });
  }

  public editTodo(todo: Todo) {
    this.todosService.editTodo({
      ...todo,
    });
  }

  //*MARK:delete-method
  public deleteTodo(id: number) {
    this.todosService.deleteTodo(id);
  }

  readonly snackBar = inject(MatSnackBar);

  readonly dialogTwo = inject(MatDialog);

  createTodoDialog(): void {
    const dialogRef = this.dialogTwo.open(CreateTodoDialogComponent, {
      data: { todo: this.todosService.todos$ },
    });

    dialogRef.afterClosed().subscribe((createResult: Todo) => {
      if (createResult) {
        this.createTodo(createResult);
        this.openSnackBarTwo();
      }
    });
  }

  readonly snackBarCreate = inject(MatSnackBar);

  openSnackBarTwo(): void {
    this.snackBar.open('Задача создана🐒', 'Закрыть', {
      duration: 2000,
    });
  }
}
