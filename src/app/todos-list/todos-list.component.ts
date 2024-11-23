import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodosApiService } from "../todos-api.service";
import { AsyncPipe, NgForOf } from "@angular/common";
import { TodoCardComponent } from "./todo-card/todo-card.component";
import { TodosService } from "../todos.service";
import { MatIcon } from "@angular/material/icon";
import { MatMiniFabButton } from "@angular/material/button";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { CreateTodoDialogComponent } from "./create-todo-dialog/create-todo-dialog.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ITodo } from "../interfaces/interfaces";

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
  readonly todosService = inject(TodosService)
  readonly dialog = inject(MatDialog);
  private _snackBar = inject(MatSnackBar);

  constructor() {
    this.todosApiService.getTodos().subscribe(
      (response: any) => {
        this.todosService.setTodos(response)
      }
    )

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
      const message: string = createResult
      ? this.todosService.getTodos().some((element) => element.title === createResult.title)
        ? 'Такая задача уже существует'
          : (this.todosService.createTodo(createResult), 'Задача успешно добавленна')
      : 'Задача не добавленна'
      this._snackBar.open(message, 'ok', { duration: 4000 })
    })
  };
}

