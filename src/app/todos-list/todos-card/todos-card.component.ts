import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ITodo } from '../../interfaces/todo.interface';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';

@Component({
  selector: 'app-todos-card',
  templateUrl: './todos-card.component.html',
  styleUrl: './todos-card.component.scss',
  standalone: true,
  imports: [],
})
export class TodosCardComponent {
  readonly dialog = inject(MatDialog);
  @Input()
  todo!: ITodo;

  @Output()
  deleteTodos = new EventEmitter();

  @Output()
  editTodos = new EventEmitter();

  onDeleteTodos(id: number) {
    this.deleteTodos.emit(id);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditTodoDialogComponent, {
      data: { todo: this.todo },
    });

    dialogRef.afterClosed().subscribe((editedResult: ITodo) => {
      if (editedResult) {
        this.editTodos.emit(editedResult);
      }
    });
  }
}
