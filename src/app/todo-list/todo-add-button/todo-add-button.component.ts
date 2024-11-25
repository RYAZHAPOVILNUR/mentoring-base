import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CreateTodoDialogComponent } from '../todo-dialog/create-todo-dialog/create-todo-dialog.component';
import { ITodo } from '../../Interfaces/todo.interface';


@Component({
  selector: 'app-todo-add-button',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './todo-add-button.component.html',
  styleUrl: './todo-add-button.component.scss',
})
export class TodoAddButtonComponent {
  @Output() createTodo = new EventEmitter<ITodo>();
  dialog = inject(MatDialog);

  openCreateDialog() {
    const dialogRef = this.dialog.open(CreateTodoDialogComponent);

    dialogRef.afterClosed().subscribe((result: ITodo) => {
      if (result) {
        this.createTodo.emit(result);
      }
    });
  }
}
