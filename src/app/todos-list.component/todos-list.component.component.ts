import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodosApiService } from '../todos-api.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodosService } from '../todos.service';
import { CreateTodosFormComponent } from '../create-todos-form/create-todos-form.component';
import { Todo } from "../users-list/user-interface";
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { CreateTodoDialogComponent } from './todo-card/create-todo-dialog/create-todo-dialog.component';

@Component({
  selector: 'app-todos-list.component',
  standalone: true,
  imports: [NgFor, TodoCardComponent, AsyncPipe, CreateTodosFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './todos-list.component.component.html',
  styleUrl: './todos-list.component.component.scss',
})
export class TodosListComponent {
  readonly todosApiService = inject(TodosApiService);
  readonly todosService = inject(TodosService);

  constructor() {
    this.todosApiService.getTodos().subscribe((response: any) => {
      this.todosService.setTodos(response);
    });
  }
  //*MARK:delete-method 
  deleteTodo(id: number) {
    this.todosService.deleteTodo(id);
  }

   public editTodo(todo: Todo) {
    this.todosService.editTodo({
      ...todo,
    })
  }

  public createTodo(formData: Todo) {
    this.todosService.createTodo({
      id: new Date().getTime(),
      title: formData.title,
      userId: formData.userId,
      completed: formData.completed,
    });
    console.log('ДАННЫЕ ФОРМЫ: ', formData);
    console.log(new Date().getTime());
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
        this.openSnackBarTwo()
      }
    });
  }

  readonly snackBarCreate = inject(MatSnackBar);

  openSnackBarTwo(): void {
    this.snackBar.open('Задача создана🐒', 'Закрыть', {
      duration: 2000
    });
  }
}
