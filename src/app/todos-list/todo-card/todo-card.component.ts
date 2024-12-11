import { NgFor } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {
  MatIconModule,
} from '@angular/material/icon';
import { DeleteTodoDialogComponent } from '../delete-todo-dialog/delete-todo-dialog.component';
import { ITodo } from '../../interfaces/todo.interface';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss',
  standalone: true,
  imports: [MatIconModule, MatDialogModule, MatSnackBarModule],
})
export class TodoCardComponent {
  @Input()
  todo!: ITodo;
  @Output()
  public deleteTodo = new EventEmitter<any>();
  private snackBar = inject(MatSnackBar);
  readonly dialog = inject(MatDialog);
  
  onDeleteTodo(todoId: number) {
    this.deleteTodo.emit(todoId);
  }

  public openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteTodoDialogComponent, {
      width: '600px',
      data: { todo: this.todo },
    });

    dialogRef.afterClosed().subscribe((result: boolean | undefined) => {
      if (result) {
        this.deleteTodo.emit(this.todo);
        this.snackBar.open('Удаление завершено', 'Ок', {
          duration: 10000,
        });
    } else  this.snackBar.open('Отмена удаления', 'Ок', {
      duration: 10000,
    });
    });
  }
}
