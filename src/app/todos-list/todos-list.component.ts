import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { RouterLink } from '@angular/router';
import { TodosApiService } from '../services/todos-services/todos-api.service';
import { TodoService } from '../services/todos-services/todos.service';
import { CreateTodoFormComponent } from '../create-todo-form/create-todo-form.component';
import { Todo } from '../interfaces/todo-interfaces';
import { MatDialog } from '@angular/material/dialog';
import { AsyncPipe, NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateTodoDialogComponent } from '../dialogs/todo-dialogs/create-todo-dialog/create-todo-dialog.component';
@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [
    NgFor,
    RouterLink,
    TodoCardComponent,
    AsyncPipe,
    CreateTodoFormComponent,
    MatButtonModule,
  ],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent {
  readonly todosApiService = inject(TodosApiService);
  readonly todosService = inject(TodoService);
  readonly snackBar = inject(MatSnackBar);

  readonly dialog = inject(MatDialog);
  constructor() {
    this.todosApiService.getTodos().subscribe((response: any) => {
      this.todosService.setTodos(response);
    });
  }

  deleteTodo(id: number): void {
    this.todosService.deleteTodo(id);
  }

  editTodo(todo: Todo) {
    this.todosService.editTodo({
      ...todo,
    });
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
    const dialogRef = this.dialog.open(CreateTodoDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result: Todo) => {
      if (result) {
        this.createTodo(result);
        this.snackBar.open('Новая задача успешно создана!', '🍕', {
          duration: 5000,
        });
      }
    });
  }
}