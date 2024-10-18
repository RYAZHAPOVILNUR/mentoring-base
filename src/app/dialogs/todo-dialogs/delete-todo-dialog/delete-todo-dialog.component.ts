import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-delete-todo-dialog',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './delete-todo-dialog.component.html',
  styleUrl: './delete-todo-dialog.component.scss',
})
export class DeleteTodoDialogComponent {
  constructor(public dialogRef: MatDialogRef<DeleteTodoDialogComponent>) {}

  public confirmDelete(): void {
    this.dialogRef.close(true);
  }

  public cancelDelete(): void {
    this.dialogRef.close(false);
  }
}