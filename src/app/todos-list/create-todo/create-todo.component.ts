import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CreateTodoDialogComponent } from './create-todo-dialog/create-todo-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ITodo } from '../../interfaces/todo.interface';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.scss',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
})
export class CreateTodoComponent {
  private readonly dialog = inject(MatDialog);

  private _snackBar = inject(MatSnackBar);

  @Output()
  createTodo = new EventEmitter<ITodo>();

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateTodoDialogComponent);

    dialogRef.afterClosed().subscribe((createdResult: ITodo) => {
      if (createdResult) {
        this.createTodo.emit(createdResult);
        this._snackBar.open('Задание создано!', 'OK', {
          duration: 3000,
        });
      }
    });
  }
}
