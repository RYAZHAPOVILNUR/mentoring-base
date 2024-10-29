import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Todo } from "../../users-list/user-interface";
import { MatCardModule } from "@angular/material/card";
import { DeleteTodoConfirmationComponent } from './delete-todo-confirmation/delete-todo-confirmation.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateTodoDialogComponent } from './create-todo-dialog/create-todo-dialog.component';
import { EditTodoDialogComponent } from './edit-todo-dialog/edit-todo-dialog.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { customTitleCutPipe } from '../../pipes/title-cut.pipe';


@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [MatCardModule, MatButtonToggleModule, customTitleCutPipe],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss',
})
export class TodoCardComponent {

  constructor(public confirmationDialog: MatDialog) {}

  @Input()
  todo!: Todo;

  @Output()
  deleteTodo = new EventEmitter();

  @Output()
  editTodo = new EventEmitter();

  @Output()
  createTodo = new EventEmitter();

  onDeleteTodo(todoId: number) {
    this.deleteTodo.emit(todoId);
  }

  deleteTodoDialog(): void {
    this.confirmationDialog
      .open(DeleteTodoConfirmationComponent, {
        data: `Do you want to delete todo?`
      })
      .afterClosed()
      .subscribe((confirmation: Boolean) => {
        if (confirmation) {
          this.onDeleteTodo(this.todo.id)
          alert("Todo is deleted");
        }
      });
  }

  readonly dialog = inject(MatDialog);

  editTodoDialog(): void {
    const dialogRef = this.dialog.open(EditTodoDialogComponent, {
      data: { todo: this.todo },
    });

    dialogRef.afterClosed().subscribe((editResult: Todo) => {
      if (editResult) {
        this.editTodo.emit(editResult);
        this.openSnackBar()
      }
    });
  }

  readonly snackBar = inject(MatSnackBar);

  openSnackBar(): void {
    this.snackBar.open('Задача редактирована🐒', 'Закрыть', {
      duration: 2000
    });
  }

  readonly dialogTwo = inject(MatDialog);

  createTodoDialog(): void {
    const dialogRef = this.dialogTwo.open(CreateTodoDialogComponent, {
      data: { todo: this.todo },
    });

    dialogRef.afterClosed().subscribe((createResult: Todo) => {
      if (createResult) {
        this.createTodo.emit(createResult);
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
