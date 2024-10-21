import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateTodoDialogComponent } from './create-todo-dialog/create-todo-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ITodo } from '../../interfaces/todo.interface';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.scss',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatCardModule],
})
export class CreateTodoComponent {
  readonly dialog = inject(MatDialog);

  @Output()
  createTodo = new EventEmitter();

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateTodoDialogComponent);

    dialogRef.afterClosed().subscribe((createdResult: ITodo) => {
      if (createdResult) {
        this.createTodo.emit(createdResult);
      }
    });
  }
}
