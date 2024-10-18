import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-delete-user-dialog',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './delete-user-dialog.component.html',
  styleUrl: './delete-user-dialog.component.scss',
})
export class DeleteUserDialogComponent {
  constructor(public dialogRef: MatDialogRef<DeleteUserDialogComponent>) {}

  public confirmDelete(): void {
    this.dialogRef.close(true);
  }

  public cancelDelete(): void {
    this.dialogRef.close(false);
  }
}