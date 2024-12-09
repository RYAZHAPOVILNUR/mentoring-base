import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodosApiService } from '../servises/todos-api.servise';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { ITodo } from '../Interfaces/todo.interface';
import { TodoAddButtonComponent } from './todo-add-button/todo-add-button.component';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, take } from 'rxjs';
import { selectTodos } from './store/todos.selectors';
import { Store } from '@ngrx/store';
import { TodosActions } from './store/todos.actions';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  standalone: true,
  imports: [
    NgFor,
    TodoCardComponent,
    AsyncPipe,
    MatDialogModule,
    TodoAddButtonComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent {
  readonly todosApiService = inject(TodosApiService);
  readonly dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);
  private readonly store = inject(Store);
  public readonly todos$ = this.store.select(selectTodos);

  constructor() {
    this.todosApiService.getTodos().subscribe((response: ITodo[]) => {
      this.store.dispatch(TodosActions.set({ todos: response }));
    });
  }
  public deleteTodo(id: number) {
    this.store.dispatch(TodosActions.delete({ id }));
  }

  public createTodo(todo: ITodo) {
    const newTodo = {
      id: new Date().getTime(),
      userId: todo.userId,
      title: todo.title,
      completed: todo.completed,
    };
    this.store.dispatch(TodosActions.create({ todo: newTodo }));
    this.snackBar.open('Новая задача создана', 'ok', {
      duration: 3000,
    });
  }

  public editTodo(formDialogValue: ITodo) {
    this.store.dispatch(TodosActions.edit({ todo: formDialogValue }));
  }
}
