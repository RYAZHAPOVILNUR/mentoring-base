import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ITodo } from '../../interfaces/todo.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';
import { DeleteTodoDialogComponent } from '../delete-todo-dialog/delete-todo-dialog.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-todos-card',
  templateUrl: './todos-card.component.html',
  styleUrl: './todos-card.component.scss',
  standalone: true,
  imports: [MatDialogModule, MatSnackBarModule, MatCardModule, MatButtonModule],
})
export class TodosCardComponent {
  private readonly dialog = inject(MatDialog);

  private _snackBar = inject(MatSnackBar);

  @Input()
  todo!: ITodo;

  @Output()
  deleteTodos = new EventEmitter<number>();

  @Output()
  editTodos = new EventEmitter<ITodo>();

  public openDialog(): void {
    const dialogRef = this.dialog.open(EditTodoDialogComponent, {
      data: { todo: this.todo },
    });

    dialogRef.afterClosed().subscribe((editedResult: ITodo) => {
      if (editedResult) {
        this.editTodos.emit(editedResult);
        this._snackBar.open('Задание отредактировано!', 'OK', {
          duration: 3000,
        });
      }
    });
  }

  public openDeleteToDoDialog(): void {
    const dialogRef = this.dialog.open(DeleteTodoDialogComponent, {
      width: '600px',
      data: { todo: this.todo },
    });

    dialogRef.afterClosed().subscribe((result: boolean | undefined) => {
      if (result) {
        this.deleteTodos.emit(this.todo.id);
        this._snackBar.open('Задание удалено!', 'OK', { duration: 3000 });
      } else {
        this._snackBar.open('Отмена удаления задания!', 'OK', {
          duration: 3000,
        });
      }
    });
  }
}
