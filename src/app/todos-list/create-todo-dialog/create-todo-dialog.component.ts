import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateTodoFormComponent } from '../../create-todo-form/create-todo-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ITodo } from '../../interfaces/todo.interface';

@Component({
  selector: 'app-create-todo-dialog',
  templateUrl: './create-todo-dialog.component.html',
  styleUrl: './create-todo-dialog.component.scss',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatCardModule],
})
export class CreateTodoDialogComponent {
  readonly dialog = inject(MatDialog);

  @Output()
  createTodo = new EventEmitter();

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateTodoFormComponent);

    dialogRef.afterClosed().subscribe((createdResult: ITodo) => {
      if (createdResult) {
        this.createTodo.emit(createdResult);
      }
    });
  }
}
