import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Todo } from '../todos.component';

@Component({
  selector: 'app-delete-todo-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButton, MatIconModule],
  templateUrl: './delete-todo-dialog.component.html',
  styleUrl: './delete-todo-dialog.component.scss'
})
export class DeleteTodoDialogComponent {
 public readonly data = inject<{todo: Todo}>(MAT_DIALOG_DATA)
}
