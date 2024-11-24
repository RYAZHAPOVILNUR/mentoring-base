import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgForOf } from "@angular/common";
import { TodoCardComponent } from "./todo-card/todo-card.component";
import { MatIcon } from "@angular/material/icon";
import { MatMiniFabButton } from "@angular/material/button";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { CreateTodoDialogComponent } from "./create-todo-dialog/create-todo-dialog.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ITodo } from "../interfaces/interfaces";
import { TodosApiService } from "../services/todos-api.service";
import { map, take, tap } from "rxjs";
import { Store } from "@ngrx/store";
import { TodosActions } from "./store/todos.actions";
import { selectTodos } from "./store/todos.selector";

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [
    NgForOf,
    TodoCardComponent,
    AsyncPipe,
    CreateTodoDialogComponent,
    MatIcon,
    MatMiniFabButton,
    MatDialogModule
  ],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosListComponent {
  readonly todosApiService = inject(TodosApiService)
  readonly dialog = inject(MatDialog);
  private _snackBar = inject(MatSnackBar);
  private readonly store = inject(Store);
  public readonly todos$ = this.store.select(selectTodos);

  constructor() {
    this.todosApiService.getTodos().subscribe((response: any) => {
        this.store.dispatch(TodosActions.set({ todos: response }))
      })
  }

  deleteTodo(id:number) {
    this.store.dispatch(TodosActions.delete({ id }))
  }
  public editTodo(todo: ITodo) {
    this.store.dispatch(TodosActions.edit({ todo }))
  }

  public createTodo(todo: ITodo) {
    this.store.dispatch(TodosActions.create({
      todo: {
        id: new Date().getTime(),
        title: todo.title,
        userId: todo.userId,
        completed: todo.completed
      }
    }))
  }
  openCreateTodoDialog() {
    const dialogRef = this.dialog.open(CreateTodoDialogComponent, {
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe((createResult: ITodo) => {
      if (!createResult) {
        this._snackBar.open('Задача не добавленна', 'ok', { duration: 4000 })
        return
      }
      this.todos$.pipe(
        take(1),
        map((todo) => todo.some((todo) => todo.title === createResult.title)),
        tap((todoExists) => {
          const message = todoExists
            ? 'Такая задача уже существует'
            : (this.createTodo(createResult), 'Задача успешно добавленна');

          this._snackBar.open(message, 'ok', { duration: 4000 });
        })
      ).subscribe()
    })
  };
}

