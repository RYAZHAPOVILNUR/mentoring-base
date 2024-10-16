import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Todo } from "/Users/mac/Desktop/link_ng_material/mentoring-base/src/app/users-list/user-interface";
import { MatCardModule } from "@angular/material/card";
import { DeleteTodoConfirmationComponent } from './delete-todo-confirmation/delete-todo-confirmation.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateTodoDialogComponent } from './create-todo-dialog/create-todo-dialog.component';
import { EditTodoDialogComponent } from './edit-todo-dialog/edit-todo-dialog.component';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss',
})
export class TodoCardComponent {
  constructor(public dialogo: MatDialog) {}
  mostrarDialogo(): void {
    this.dialogo
      .open(DeleteTodoConfirmationComponent, {
        data: `Do you want to delete user?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.onDeleteTodo(this.todo.id)
          alert("User is deleted");
        }
      });
  }

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

  readonly dialog = inject(MatDialog);

  openDialog(): void {
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
    this.snackBar.open('Пользователь редактирован🐒', 'Закрыть', {
      duration: 2000
    });
  }

  readonly dialogTwo = inject(MatDialog);

  openDialogTwo(): void {
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
    this.snackBar.open('Пользователь создан🐒', 'Закрыть', {
      duration: 2000
    });
  }
}
