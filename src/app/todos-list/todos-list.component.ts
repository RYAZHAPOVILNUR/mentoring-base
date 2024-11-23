import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo-interfaces';
import { TodosApiService } from '../services/todos-services/todos-api.service';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { TodoActions } from './store/todos.actions';
import { selectTodos } from './store/todos.selectors';
import { CreateTodoDialogComponent } from '../dialogs/todo-dialogs/create-todo-dialog/create-todo-dialog.component';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [
    NgFor,
    TodoCardComponent,
    AsyncPipe,
  ],
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent implements OnInit {
  readonly todosApiService = inject(TodosApiService);
  readonly dialog = inject(MatDialog);
  readonly snackBar = inject(MatSnackBar);
  private readonly store = inject(Store);
  public readonly todos$ = this.store.select(selectTodos);

  ngOnInit(): void {
    this.loadTodos();
  }

  private loadTodos() {
    this.todosApiService.getTodos().subscribe((response: Todo[]) => {
      this.store.dispatch(TodoActions.set({ todos: response }));
    });
  }

  deleteTodo(id: number): void {
    this.store.dispatch(TodoActions.delete({ id }));
  }

  editTodo(todo: Todo): void {
    this.store.dispatch(TodoActions.edit({ todo }));
  }

  public createTodo(formData: Todo): void {
    const newTodo: Todo = {
      id: new Date().getTime(),
      userId: formData.userId,
      title: formData.title,
      completed: formData.completed,
    };

    this.store.dispatch(TodoActions.create({ todo: newTodo }));
    this.snackBar.open('Новая задача успешно создана!', 'Закрыть', { duration: 2000 });
  }

  openCreateTodoDialog(): void {
    const dialogRef = this.dialog.open(CreateTodoDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result: Todo) => {
      if (result) {
        this.createTodo(result);
      }
    });
  }
}