import { Component, inject } from '@angular/core';
import { MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';

@Component({
  selector: 'app-delete-todo-dialog',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDialogClose],
  templateUrl: './delete-todo-dialog.component.html',
  styleUrl: './delete-todo-dialog.component.scss',
})
export class DeleteTodoDialogComponent {
 private dialogRef = inject(MatDialogRef<EditTodoDialogComponent>);

  public confirmDelete(): void {
    this.dialogRef.close(true);
  }
}