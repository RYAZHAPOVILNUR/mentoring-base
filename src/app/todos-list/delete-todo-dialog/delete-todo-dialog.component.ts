import { Component, inject } from '@angular/core';
import { MatButton } from "@angular/material/button";
import {
  MAT_DIALOG_DATA, MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogModule,
  MatDialogTitle
} from "@angular/material/dialog";
import { Todo } from "../todos-list.component";

@Component({
  selector: 'app-delete-todo-dialog',
  standalone: true,
    imports: [
        MatButton,
        MatDialogActions,
        MatDialogClose,
        MatDialogTitle,
        MatDialogModule
    ],
  templateUrl: './delete-todo-dialog.component.html',
  styleUrl: './delete-todo-dialog.component.scss'
})
export class DeleteTodoDialogComponent {
  public readonly data = inject<{ todo: Todo }>(MAT_DIALOG_DATA);

  readonly dialog = inject(MatDialog)
}
