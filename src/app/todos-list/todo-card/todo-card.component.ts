import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CreateTodoFormComponent } from '../../create-todo-form/create-todo-form.component';
import { Todo } from '../../interfaces/todo-interfaces';
import { MatButtonModule } from '@angular/material/button';
import { DeleteTodoDialogComponent } from '../../dialogs/todo-dialogs/delete-todo-dialog/delete-todo-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoDialogComponent } from '../../dialogs/todo-dialogs/edit-todo-dialog/edit-todo-dialog.component';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [CreateTodoFormComponent, MatButtonModule],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss',
})
export class TodoCardComponent {
  @Input()
  todo!: Todo;

  @Output()
  editTodo = new EventEmitter();

  @Output()
  deleteTodo = new EventEmitter();

  readonly dialog = inject(MatDialog);

  onDeleteTodo(todoId: number) {
    this.deleteTodo.emit(todoId);
  }

  openEditTodoDialog(): void {
    const dialogRef = this.dialog.open(EditTodoDialogComponent, {
      data: { todo: this.todo },
    });

    dialogRef.afterClosed().subscribe((editResult) => {
      if (editResult) {
        this.editTodo.emit(editResult);
      }
    });
  }

  openDeleteTodoDialog(): void {
    const dialogRef = this.dialog.open(DeleteTodoDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteTodo.emit(this.todo.id);
      }
    });
  }
}