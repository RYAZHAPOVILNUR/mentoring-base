import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-todo-dialog',
  standalone: true,
  imports: [],
  templateUrl: './delete-todo-dialog.component.html',
  styleUrl: './delete-todo-dialog.component.scss'
})
export class DeleteTodoDialogComponent {
  readonly dialogRef = inject(MatDialogRef<DeleteTodoDialogComponent>);


  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false); 
  }
}
