import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ITodo } from '../../Interfaces/todo.interface';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteTodoDialogComponent } from '../todo-dialog/delete-todo-dialog/delete-todo-dialog.component';
import { EditTodoDialogComponent } from '../todo-dialog/edit-todo-dialog/edit-todo-dialog.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CutTextPipe } from '../../pipes/max-lenght.pipe';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss',
  standalone: true,
  imports: [
    MatDialogModule,
    MatSnackBarModule,
    MatCardModule,
    MatButtonModule,
    CutTextPipe,
  ],
})
export class TodoCardComponent {
  @Input()
  public todo!: ITodo;

  @Output()
  public deleteTodo = new EventEmitter<ITodo>();

  @Output()
  public editTodo = new EventEmitter<ITodo>();

  readonly dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);

  public openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteTodoDialogComponent, {
      width: '600px',
      data: { todo: this.todo },
    });

    dialogRef.afterClosed().subscribe((result: boolean | undefined) => {
      if (result) {
        this.deleteTodo.emit(this.todo);
        this.snackBar.open('Удаление задачи', 'ok', {
          duration: 3000,
        });
      } else
        this.snackBar.open('Отмена удаления', 'ok', {
          duration: 3000,
        });
    });
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(EditTodoDialogComponent, {
      data: { todo: this.todo },
    });

    dialogRef.afterClosed().subscribe((editResult: ITodo) => {
      if (editResult) {
        this.editTodo.emit(editResult);
        this.snackBar.open('Задача изменена', 'ok', {
          duration: 3000,
        });
      } else {
        this.snackBar.open('Отмена редактирования', 'ok', {
          duration: 3000,
        });
      }
    });
  }

  onDeleteTodo(todoId: ITodo) {
    this.deleteTodo.emit(todoId);
  }
}
