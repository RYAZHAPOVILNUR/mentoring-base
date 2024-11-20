import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodosApiService } from "../services/todos-api.service";
import { AsyncPipe, NgForOf } from "@angular/common";
import { TodoCardComponent } from "./todo-card/todo-card.component";
import { TodosService } from "../services/todos.service";
import { MatIcon } from "@angular/material/icon";
import { MatMiniFabButton } from "@angular/material/button";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { CreateTodoDialogComponent } from "./create-todo-dialog/create-todo-dialog.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ITodo } from "../interfaces/todo"

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
  readonly todosService = inject(TodosService)
  readonly dialog = inject(MatDialog);
  private _snackBar = inject(MatSnackBar);

  constructor() {
    this.todosService.loadTodos()
  }

  deleteTodo(id:number) {
    this.todosService.deleteTodo(id);
  }
  public editTodo(todo: ITodo) {
    this.todosService.editTodo(todo)
  }

  public createTodo(formTodo: ITodo) {
    this.todosService.createTodo({
      id: new Date().getTime(),
      title: formTodo.title,
      userId: formTodo.userId,
      completed: formTodo.completed
    })
  }
  openCreateTodoDialog() {
    const dialogRef = this.dialog.open(CreateTodoDialogComponent, {
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe((createResult: ITodo) => {
      if (createResult) {
        const existingTodo = this.todosService.getTodos().find(
          currentElement => currentElement.title === createResult.title
        );

        if (existingTodo) {
          this._snackBar.open('Такая задача уже существует', 'ok', {
                duration: 4000
              });
        } else {
          this.todosService.createTodo(createResult);
          this._snackBar.open('Задача успешно добавленна', 'ok', {
            duration: 4000,
          });
        }
      } else {
        this._snackBar.open('Задача не добавленна', 'ok', {
          duration: 4000,
        });
      }
    })
  };
}

