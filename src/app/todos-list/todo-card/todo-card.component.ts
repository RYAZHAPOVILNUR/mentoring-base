import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TodoInterface } from '../../interfaces/todo-interfaces';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteTodoDialogComponent } from '../delete-todo-dialog/delete-todo-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [MatIconModule, MatDialogModule],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss'
})
export class TodoCardComponent {
  @Input()
  todo!: TodoInterface;

  @Output()
  public deleteTodo = new EventEmitter<number>();

  readonly dialog = inject(MatDialog);

  public snackBar = inject(MatSnackBar);

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteTodoDialogComponent, {
      data: { todo: this.todo },
    });

    dialogRef.afterClosed().subscribe((result: boolean | undefined) => {
      if (result) {
        this.deleteTodo.emit(this.todo.id);
        this.snackBar.open('Todo удален!', 'Ok', {
          duration: 5000
        });
      } else {
        this.snackBar.open('Отмена удаления!', 'Ok', {
          duration: 5000
        });
      }
    });
  }
}
