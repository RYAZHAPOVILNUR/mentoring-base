import { Component, inject } from '@angular/core';
import { TodoInterface } from '../../interfaces/todo-interfaces';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-todo-dialog',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './delete-todo-dialog.component.html',
  styleUrl: './delete-todo-dialog.component.scss'
})
export class DeleteTodoDialogComponent {
  public readonly data = inject<{todo: TodoInterface}>(MAT_DIALOG_DATA);
};
