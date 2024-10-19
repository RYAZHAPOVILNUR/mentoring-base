import { Component, inject } from '@angular/core';
import { TodoInterface } from '../../interfaces/todo-interfaces';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-todo-dialog',
  standalone: true,
  imports: [],
  templateUrl: './edit-todo-dialog.component.html',
  styleUrl: './edit-todo-dialog.component.scss'
})
export class EditTodoDialogComponent {
  readonly data = inject<{ todo: TodoInterface }>(MAT_DIALOG_DATA);
}
