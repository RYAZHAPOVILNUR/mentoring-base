import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodosApiService } from '../../../services/todos-api.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodosService } from '../../../services/todos.service';
import { CreateTodosFormComponent } from '../create-todos-form/create-todos-form.component';
import { Todo } from '../users-list/user-interface';
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
      this.loadTodosFromLocalStorage();
  }

  private loadTodosFromLocalStorage() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      this.todosService.setTodos(JSON.parse(storedTodos));
    } else {
      this.todosApiService.getTodos().subscribe((response: any) => {
        this.todosService.setTodos(response);
        this.saveTodosToLocalStorage(response);
      });
    }
  }

  private saveTodosToLocalStorage(todos: Todo[]) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  //*MARK:delete-method
  deleteTodo(id: number) {
    this.todosService.deleteTodo(id);
    this.updateLocalStorage();
  }

  public editTodo(todo: Todo) {
    this.todosService.editTodo({
      ...todo,
    });

    this.updateLocalStorage();
  }

  public createTodo(formData: Todo) {
    const newTodo: Todo = {
      id: new Date().getTime(),
      title: formData.title,
      userId: formData.userId,
      completed: formData.completed,
    };
    this.todosService.createTodo(newTodo);
    this.updateLocalStorage();
  }

  private updateLocalStorage() {
    const todos = this.todosService.getTodos();
    this.saveTodosToLocalStorage(todos);
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
